import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { playSound } from '../utils/audio';

export default function Hero3D() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xfacc15, 3.5);
    rimLight.position.set(-6, -3, -4);
    scene.add(rimLight);

    // Interactive Point Light that tracks cursor
    const cursorLight = new THREE.PointLight(0xfacc15, 3, 16);
    cursorLight.position.set(0, 0, 4);
    scene.add(cursorLight);

    // 4. Procedural 3D Olympic Barbell & Calibrated Plates Assembly
    const barbellGroup = new THREE.Group();

    // Materials
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      metalness: 0.95,
      roughness: 0.12,
    });

    const yellowBumperMaterial = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      metalness: 0.65,
      roughness: 0.28,
    });

    const darkPlateMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f1f23,
      metalness: 0.85,
      roughness: 0.22,
    });

    const hubMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      metalness: 0.9,
      roughness: 0.15,
    });

    // Central Olympic Bar Shaft (28mm diameter represented in scale)
    const barGeo = new THREE.CylinderGeometry(0.1, 0.1, 8.8, 48);
    const barMesh = new THREE.Mesh(barGeo, chromeMaterial);
    barMesh.rotation.z = Math.PI / 2;
    barbellGroup.add(barMesh);

    // Sleeves (left and right)
    const sleeveGeo = new THREE.CylinderGeometry(0.18, 0.18, 1.8, 36);
    const leftSleeve = new THREE.Mesh(sleeveGeo, hubMaterial);
    leftSleeve.rotation.z = Math.PI / 2;
    leftSleeve.position.x = -3.2;
    barbellGroup.add(leftSleeve);

    const rightSleeve = new THREE.Mesh(sleeveGeo, hubMaterial);
    rightSleeve.rotation.z = Math.PI / 2;
    rightSleeve.position.x = 3.2;
    barbellGroup.add(rightSleeve);

    // Helper to create a calibrated bumper plate
    function createPlate(radius, thickness, material, isYellow = false) {
      const group = new THREE.Group();
      
      // Main Plate Disc
      const discGeo = new THREE.CylinderGeometry(radius, radius, thickness, 64);
      const disc = new THREE.Mesh(discGeo, material);
      disc.rotation.z = Math.PI / 2;
      group.add(disc);

      // Inner Steel Center Hub
      const centerGeo = new THREE.CylinderGeometry(0.42, 0.42, thickness + 0.02, 32);
      const center = new THREE.Mesh(centerGeo, hubMaterial);
      center.rotation.z = Math.PI / 2;
      group.add(center);

      // Chamfered Bevel Rim
      const rimGeo = new THREE.TorusGeometry(radius - 0.05, 0.04, 16, 64);
      const rim = new THREE.Mesh(rimGeo, isYellow ? chromeMaterial : yellowBumperMaterial);
      group.add(rim);

      return group;
    }

    // Left Side Plates (45lb yellow bumper, 25lb black plate, collar)
    const leftPlate1 = createPlate(1.5, 0.32, yellowBumperMaterial, true);
    leftPlate1.position.x = -2.7;
    barbellGroup.add(leftPlate1);

    const leftPlate2 = createPlate(1.25, 0.24, darkPlateMaterial, false);
    leftPlate2.position.x = -3.05;
    barbellGroup.add(leftPlate2);

    // Left Lock Collar
    const collarGeo = new THREE.TorusGeometry(0.24, 0.07, 16, 32);
    const leftCollar = new THREE.Mesh(collarGeo, chromeMaterial);
    leftCollar.position.x = -3.26;
    barbellGroup.add(leftCollar);

    // Right Side Plates
    const rightPlate1 = createPlate(1.5, 0.32, yellowBumperMaterial, true);
    rightPlate1.position.x = 2.7;
    barbellGroup.add(rightPlate1);

    const rightPlate2 = createPlate(1.25, 0.24, darkPlateMaterial, false);
    rightPlate2.position.x = 3.05;
    barbellGroup.add(rightPlate2);

    // Right Lock Collar
    const rightCollar = new THREE.Mesh(collarGeo, chromeMaterial);
    rightCollar.position.x = 3.26;
    barbellGroup.add(rightCollar);

    // Initial slight dynamic tilt
    barbellGroup.rotation.z = -0.22;
    barbellGroup.rotation.x = 0.15;
    scene.add(barbellGroup);

    // 5. Orbiting Gold Sparks / Particle Field
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleSpeeds = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 10;
      particlePos[i + 1] = (Math.random() - 0.5) * 6;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;
      particleSpeeds.push({
        vx: (Math.random() - 0.5) * 0.008,
        vy: (Math.random() - 0.5) * 0.008 + 0.004,
        vz: (Math.random() - 0.5) * 0.008,
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xfacc15,
      size: 0.06,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Cursor Tracking & Drag Controls
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let dragVelocity = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetX = nx;
      targetY = ny;

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        dragVelocity = deltaX * 0.015;
        barbellGroup.rotation.y += dragVelocity;
        prevMouseX = e.clientX;
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      playSound('clink');
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousedown', handleMouseDown);

    // Touch events
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      prevMouseX = e.touches[0].clientX;
      playSound('clink');
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      dragVelocity = deltaX * 0.015;
      barbellGroup.rotation.y += dragVelocity;
      prevMouseX = e.touches[0].clientX;
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    // 7. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // 8. Render Animation Loop
    let animId;
    let clock = new THREE.Clock();

    function animate() {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Continuous subtle idle rotation + drag inertia
      if (!isDragging) {
        barbellGroup.rotation.y += 0.006 + dragVelocity;
        dragVelocity *= 0.95; // Inertial decay
      }

      // Smooth pointer parallax
      const targetRotX = 0.15 + targetY * 0.35;
      const targetRotZ = -0.22 + targetX * 0.25;
      barbellGroup.rotation.x += (targetRotX - barbellGroup.rotation.x) * 0.05;
      barbellGroup.rotation.z += (targetRotZ - barbellGroup.rotation.z) * 0.05;

      // Cursor light tracking in 3D
      cursorLight.position.x += (targetX * 5 - cursorLight.position.x) * 0.1;
      cursorLight.position.y += (targetY * 3.5 - cursorLight.position.y) * 0.1;

      // Animate floating spark particles
      const posArr = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        posArr[idx] += particleSpeeds[i].vx;
        posArr[idx + 1] += particleSpeeds[i].vy;
        posArr[idx + 2] += particleSpeeds[i].vz;

        // Wrap around bounds
        if (posArr[idx + 1] > 3) posArr[idx + 1] = -3;
        if (posArr[idx] > 5) posArr[idx] = -5;
        if (posArr[idx] < -5) posArr[idx] = 5;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[450px] sm:h-[520px] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-950 via-[#0d0d12] to-zinc-950 border border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.95)] cursor-grab active:cursor-grabbing group"
    >
      {/* 3D Viewport Controls & HUD Overlay */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="bg-black/70 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-full text-[11px] font-mono text-zinc-300">
          ⚡ REAL-TIME 3D WEBGL • ELEIKO OLYMPIC BARBELL
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none text-[11px] font-mono text-zinc-400">
        <span className="bg-black/60 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-full">
          🖱️ Drag to Spin Barbell in 3D
        </span>
        <span className="hidden sm:inline bg-black/60 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-full text-yellow-400">
          ACES Filmic • Specular Reflections Active
        </span>
      </div>
    </div>
  );
}
