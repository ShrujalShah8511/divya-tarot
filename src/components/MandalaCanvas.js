// ==========================================================================
// SACRED MANDALA & COSMIC STARFIELD BACKGROUND CANVAS
// ==========================================================================

export class MandalaCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mandalaAngle = 0;
    this.width = 0;
    this.height = 0;
    this.animId = null;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.createParticles();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createParticles() {
    this.particles = [];
    const count = Math.floor((this.width * this.height) / 18000);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.8 + 0.5,
        color: Math.random() > 0.3 ? '#ffd700' : '#f5a623',
        alpha: Math.random() * 0.7 + 0.2,
        speedY: (Math.random() - 0.5) * 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005
      });
    }
  }

  drawMandala(centerX, centerY, outerRadius) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(this.mandalaAngle);

    ctx.strokeStyle = 'rgba(245, 166, 35, 0.08)';
    ctx.lineWidth = 1;

    // Concentric sacred circles
    const layers = [0.3, 0.5, 0.75, 1.0];
    layers.forEach(rScale => {
      ctx.beginPath();
      ctx.arc(0, 0, outerRadius * rScale, 0, Math.PI * 2);
      ctx.stroke();
    });

    // 12 Lotus Petals
    const petals = 12;
    for (let i = 0; i < petals; i++) {
      const angle = (i * Math.PI * 2) / petals;
      ctx.save();
      ctx.rotate(angle);
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(outerRadius * 0.4, outerRadius * 0.4, 0, outerRadius * 0.9);
      ctx.quadraticCurveTo(-outerRadius * 0.4, outerRadius * 0.4, 0, 0);
      ctx.fillStyle = 'rgba(255, 215, 0, 0.03)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 166, 35, 0.12)';
      ctx.stroke();
      
      ctx.restore();
    }

    ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw background cosmic gradient
    const grad = this.ctx.createRadialGradient(
      this.width / 2, this.height / 2, 50,
      this.width / 2, this.height / 2, Math.max(this.width, this.height)
    );
    grad.addColorStop(0, '#0f1438');
    grad.addColorStop(0.6, '#080b20');
    grad.addColorStop(1, '#040612');
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Draw Sacred Mandala
    this.mandalaAngle += 0.0008;
    const mandalaSize = Math.min(this.width, this.height) * 0.42;
    this.drawMandala(this.width / 2, this.height * 0.45, mandalaSize);

    // Draw Starfield Particles
    this.particles.forEach(p => {
      p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;
      p.alpha = Math.max(0.1, Math.min(0.85, p.alpha));
      p.y += p.speedY;

      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = '#ffd700';
      this.ctx.fill();
      this.ctx.restore();
    });

    this.animId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  }
}
