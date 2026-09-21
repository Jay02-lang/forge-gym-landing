import React, { useEffect, useRef, useState } from 'react';
import { Play, RotateCcw, Sparkles, Orbit, Plus, Info } from 'lucide-react';

export default function WeightLab() {
  const canvasRef = useRef(null);
  const [activeBodiesCount, setActiveBodiesCount] = useState(6);
  const [totalWeight, setTotalWeight] = useState(250);
  const [gravityState, setGravityState] = useState(0);

  const gravityLevels = [
    { label: '1.0G (Earth)', g: 0.55 },
    { label: '0.16G (Moon)', g: 0.1 },
    { label: '0.0G (Zero-G)', g: 0.0 },
    { label: '2.5G (Jupiter)', g: 1.35 },
  ];

  // Helper references to pass into canvas loop
  const simulationRef = useRef({
    gravity: 0.55,
    bodies: [],
    particles: [],
    spawnPlate: null,
    spawnKettlebell: null,
    reset: null,
  });

  useEffect(() => {
    simulationRef.current.gravity = gravityLevels[gravityState].g;
  }, [gravityState]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
    resize();
    window.addEventListener('resize', resize);

    const friction = 0.985;
    const floorBounce = 0.68;
    const wallBounce = 0.75;
    const bodies = [];
    const particles = [];

    class SparkParticle {
      constructor(x, y, color = '#facc15') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 6;
        this.vy = (Math.random() - 0.5) * 6 - 2;
        this.life = 1.0;
        this.decay = 0.04 + Math.random() * 0.03;
        this.color = color;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.2;
        this.life -= this.decay;
      }
      draw(c) {
        c.save();
        c.globalAlpha = Math.max(0, this.life);
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    class RigidWeight {
      constructor(x, y, radius, type = 'plate45', weightLbs = 45) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = Math.random() * 2;
        this.radius = radius;
        this.type = type;
        this.weightLbs = weightLbs;
        this.rotation = Math.random() * Math.PI * 2;
        this.angularVelocity = (Math.random() - 0.5) * 0.08;
        this.mass = radius * 0.8;
        this.isDragging = false;
      }

      update() {
        if (this.isDragging) return;

        const currentG = simulationRef.current.gravity;
        this.vy += currentG;
        this.vx *= friction;
        this.vy *= friction;
        this.rotation += this.angularVelocity;
        this.angularVelocity *= 0.99;

        this.x += this.vx;
        this.y += this.vy;

        // Floor collision
        if (this.y + this.radius > canvas.height) {
          this.y = canvas.height - this.radius;
          const impactSpeed = Math.abs(this.vy);
          this.vy = -this.vy * floorBounce;
          this.vx *= 0.94;
          this.angularVelocity = this.vx * 0.03;

          // Spawn impact sparks if hit hard
          if (impactSpeed > 6) {
            for (let i = 0; i < 6; i++) {
              particles.push(new SparkParticle(this.x, canvas.height - 2));
            }
          }
        }

        // Ceiling bounce (Zero-G or Jupiter throws)
        if (this.y - this.radius < 0) {
          this.y = this.radius;
          this.vy = -this.vy * floorBounce;
        }

        // Walls
        if (this.x - this.radius < 0) {
          this.x = this.radius;
          this.vx = -this.vx * wallBounce;
        } else if (this.x + this.radius > canvas.width) {
          this.x = canvas.width - this.radius;
          this.vx = -this.vx * wallBounce;
        }
      }

      draw(c) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rotation);

        if (this.type === 'kettlebell') {
          // Handle
          c.strokeStyle = '#71717a';
          c.lineWidth = 6;
          c.beginPath();
          c.arc(0, -this.radius * 0.75, this.radius * 0.55, Math.PI, 0);
          c.stroke();

          // Bell Body
          c.fillStyle = '#18181b';
          c.beginPath();
          c.arc(0, 0, this.radius, 0, Math.PI * 2);
          c.fill();

          c.lineWidth = 2.5;
          c.strokeStyle = '#facc15';
          c.stroke();

          c.fillStyle = '#facc15';
          c.font = 'bold 12px Inter, sans-serif';
          c.textAlign = 'center';
          c.textBaseline = 'middle';
          c.fillText('53LB', 0, 0);

        } else if (this.type === 'plate45') {
          // 45lb Yellow Bumper
          c.fillStyle = '#facc15';
          c.beginPath();
          c.arc(0, 0, this.radius, 0, Math.PI * 2);
          c.fill();

          // Inner Groove
          c.fillStyle = '#141416';
          c.beginPath();
          c.arc(0, 0, this.radius * 0.65, 0, Math.PI * 2);
          c.fill();

          // Steel Center Ring
          c.fillStyle = '#d4d4d8';
          c.beginPath();
          c.arc(0, 0, this.radius * 0.22, 0, Math.PI * 2);
          c.fill();

          c.fillStyle = '#000000';
          c.font = '900 12px Inter, sans-serif';
          c.textAlign = 'center';
          c.textBaseline = 'middle';
          c.fillText('45 LB', 0, -this.radius * 0.42);
          c.fillText('FORGE', 0, this.radius * 0.42);

        } else {
          // 25lb Black Steel Plate
          c.fillStyle = '#27272a';
          c.beginPath();
          c.arc(0, 0, this.radius, 0, Math.PI * 2);
          c.fill();

          c.strokeStyle = '#e4e4e7';
          c.lineWidth = 2;
          c.stroke();

          c.fillStyle = '#71717a';
          c.beginPath();
          c.arc(0, 0, this.radius * 0.25, 0, Math.PI * 2);
          c.fill();

          c.fillStyle = '#facc15';
          c.font = 'bold 11px Inter, sans-serif';
          c.textAlign = 'center';
          c.textBaseline = 'middle';
          c.fillText('25 LB', 0, -this.radius * 0.5);
        }

        c.restore();
      }
    }

    function resolveCollisions() {
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const b1 = bodies[i];
          const b2 = bodies[j];

          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = b1.radius + b2.radius;

          if (dist < minDist && dist > 0.001) {
            const overlap = (minDist - dist) * 0.5;
            const nx = dx / dist;
            const ny = dy / dist;

            if (!b1.isDragging) {
              b1.x -= nx * overlap;
              b1.y -= ny * overlap;
            }
            if (!b2.isDragging) {
              b2.x += nx * overlap;
              b2.y += ny * overlap;
            }

            const kx = b1.vx - b2.vx;
            const ky = b1.vy - b2.vy;
            const relSpeed = Math.hypot(kx, ky);

            if (relSpeed > 7) {
              const midX = (b1.x + b2.x) * 0.5;
              const midY = (b1.y + b2.y) * 0.5;
              for (let s = 0; s < 4; s++) {
                particles.push(new SparkParticle(midX, midY));
              }
            }

            const p = (2 * (nx * kx + ny * ky)) / (b1.mass + b2.mass);

            if (!b1.isDragging) {
              b1.vx -= p * b2.mass * nx * 0.86;
              b1.vy -= p * b2.mass * ny * 0.86;
            }
            if (!b2.isDragging) {
              b2.vx += p * b1.mass * nx * 0.86;
              b2.vy += p * b1.mass * ny * 0.86;
            }
          }
        }
      }
    }

    function resetSimulation() {
      bodies.length = 0;
      const w = canvas.width;
      bodies.push(new RigidWeight(w * 0.25, 80, 42, 'plate45', 45));
      bodies.push(new RigidWeight(w * 0.38, 40, 36, 'plate25', 25));
      bodies.push(new RigidWeight(w * 0.50, 100, 32, 'kettlebell', 53));
      bodies.push(new RigidWeight(w * 0.62, 60, 42, 'plate45', 45));
      bodies.push(new RigidWeight(w * 0.74, 120, 36, 'plate25', 25));
      bodies.push(new RigidWeight(w * 0.85, 50, 32, 'kettlebell', 53));
      updateStats();
    }

    function updateStats() {
      setActiveBodiesCount(bodies.length);
      const total = bodies.reduce((acc, b) => acc + b.weightLbs, 0);
      setTotalWeight(total);
    }

    simulationRef.current.spawnPlate = () => {
      const randX = 80 + Math.random() * (canvas.width - 160);
      bodies.push(new RigidWeight(randX, 40, 42, 'plate45', 45));
      updateStats();
    };

    simulationRef.current.spawnKettlebell = () => {
      const randX = 80 + Math.random() * (canvas.width - 160);
      bodies.push(new RigidWeight(randX, 40, 32, 'kettlebell', 53));
      updateStats();
    };

    simulationRef.current.reset = resetSimulation;

    // Mouse / Touch Dragging & Throwing
    let activeBody = null;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let mouseVelX = 0;
    let mouseVelY = 0;

    function getCanvasCoordinates(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    }

    function handleStart(pos) {
      for (let i = bodies.length - 1; i >= 0; i--) {
        const b = bodies[i];
        if (Math.hypot(b.x - pos.x, b.y - pos.y) <= b.radius) {
          activeBody = b;
          b.isDragging = true;
          prevMouseX = pos.x;
          prevMouseY = pos.y;
          break;
        }
      }
    }

    function handleMove(pos) {
      if (!activeBody) return;
      mouseVelX = pos.x - prevMouseX;
      mouseVelY = pos.y - prevMouseY;
      activeBody.x = pos.x;
      activeBody.y = pos.y;
      prevMouseX = pos.x;
      prevMouseY = pos.y;
    }

    function handleEnd() {
      if (activeBody) {
        activeBody.isDragging = false;
        activeBody.vx = mouseVelX * 1.15;
        activeBody.vy = mouseVelY * 1.15;
        activeBody.angularVelocity = mouseVelX * 0.04;
        activeBody = null;
      }
    }

    canvas.addEventListener('mousedown', (e) => handleStart(getCanvasCoordinates(e)));
    window.addEventListener('mousemove', (e) => handleMove(getCanvasCoordinates(e)));
    window.addEventListener('mouseup', handleEnd);

    canvas.addEventListener('touchstart', (e) => handleStart(getCanvasCoordinates(e)), { passive: true });
    canvas.addEventListener('touchmove', (e) => handleMove(getCanvasCoordinates(e)), { passive: true });
    canvas.addEventListener('touchend', handleEnd);

    resetSimulation();

    // Render loop
    let animId;
    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Floor grid styling
      ctx.strokeStyle = '#18181b';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Update & Draw Bodies
      for (const b of bodies) {
        b.update();
      }
      resolveCollisions();

      for (const b of bodies) {
        b.draw(ctx);
      }

      // Draw Sparks
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mouseup', handleEnd);
    };
  }, []);

  return (
    <section id="physics-zone" className="py-24 bg-[#0a0a0e] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-yellow-400 font-mono text-xs tracking-widest font-bold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>SKILL: WEB-PHYSICS & RIGID-BODY SIMULATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              THE INTERACTIVE <span className="text-yellow-400">WEIGHT LAB.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Experience the iron before stepping foot on our platforms. Grab, throw, bounce, and stack bumper plates and competition kettlebells with simulated 2D gravity and momentum.
            </p>
          </div>

          {/* Interactive Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => simulationRef.current.spawnPlate && simulationRef.current.spawnPlate()}
              className="bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black font-mono px-4 py-2.5 rounded-xl transition-all active:scale-95 flex items-center gap-1.5 shadow-[0_0_20px_rgba(250,204,21,0.2)] cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>+ 45LB BUMPER</span>
            </button>

            <button
              onClick={() => simulationRef.current.spawnKettlebell && simulationRef.current.spawnKettlebell()}
              className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 text-xs font-bold font-mono px-4 py-2.5 rounded-xl transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>+ KETTLEBELL</span>
            </button>

            <button
              onClick={() => setGravityState((prev) => (prev + 1) % gravityLevels.length)}
              className="bg-zinc-900 hover:bg-zinc-800 text-yellow-400 border border-yellow-400/40 text-xs font-mono font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              title="Change Gravity Mode"
            >
              <Orbit className="w-4 h-4" />
              <span>GRAVITY: {gravityLevels[gravityState].label}</span>
            </button>

            <button
              onClick={() => simulationRef.current.reset && simulationRef.current.reset()}
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 text-xs font-mono font-bold px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer"
              title="Reset Sandbox"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Canvas Frame */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-800 bg-[#060608] shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
          
          {/* Top Canvas Instruction Overlay */}
          <div className="absolute top-4 left-5 pointer-events-none text-xs font-mono text-zinc-400 flex items-center gap-4 z-10">
            <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-800 text-[11px]">
              🖱️ Drag & Toss with Mouse / Touch
            </span>
            <span className="hidden sm:inline bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-800 text-[11px] text-yellow-400">
              ⚡ Total Load on Floor: {totalWeight} LBS
            </span>
            <span className="hidden md:inline bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-800 text-[11px] text-zinc-400">
              Rigid Bodies: {activeBodiesCount}
            </span>
          </div>

          <canvas
            ref={canvasRef}
            className="w-full h-[380px] sm:h-[450px] block cursor-grab active:cursor-grabbing touch-none"
          />

          {/* Bottom Telemetry Bar */}
          <div className="bg-zinc-900/90 border-t border-zinc-800 px-5 py-3 flex items-center justify-between text-xs text-zinc-400 font-mono">
            <div className="flex items-center gap-2.5">
              <span className="text-white font-bold">2D EULER/VERLET INTEGRATION ENGINE</span>
              <span className="hidden lg:inline text-zinc-500">| Collision Sparks & Momentum Conservation</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-zinc-500">
              <span>Restitution: 0.72</span>
              <span>Friction: 0.985</span>
              <span>Substep: 60Hz</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
