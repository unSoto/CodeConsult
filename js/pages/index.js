document.addEventListener('mousemove', (e) => {
  const heroSection = document.querySelector('.hero');
  const rect = heroSection.getBoundingClientRect();

  // Вычисляем позицию курсора относительно секции .hero
  const x = (e.clientX - rect.left) / rect.width * 100;
  const y = (e.clientY - rect.top) / rect.height * 100;

  // Меняем позицию фона
  heroSection.style.backgroundPosition = `${x * 0.1}% ${y * 0.1}%`;
});



// JavaScript для квантовых частиц
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('quantum-particles');
  const ctx = canvas.getContext('2d');

  // Устанавливаем размеры canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particles = [];
  const maxDistance = 100;

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = Math.random() * 2 + 1;
      this.color = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
      this.velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5
      };
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.x > canvas.width || this.x < 0) this.velocity.x *= -1;
      if (this.y > canvas.height || this.y < 0) this.velocity.y *= -1;

      this.draw();
    }
  }

  function createParticles() {
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push(new Particle(x, y));
    }
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const distance = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - distance / maxDistance) * 0.3})`;
          ctx.stroke();
        }
      }
    }
  }

  // Частицы отключены по запросу пользователя
  // function animate() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   connectParticles();
  //   particles.forEach(particle => particle.update());
  //   requestAnimationFrame(animate);
  // }

  // createParticles();
  // animate();
});

// Code typing animation
document.addEventListener('DOMContentLoaded', () => {
  const codeLines = document.querySelectorAll('.code-line');
  const cursor = document.querySelector('.cursor');

  // Hide all code lines initially
  codeLines.forEach(line => {
    line.style.opacity = '0';
    line.style.transform = 'translateX(-20px)';
  });

  // Typing animation - show lines one by one
  let lineIndex = 0;
  const lineDelay = 600;

  function showNextLine() {
    if (lineIndex < codeLines.length) {
      const currentLine = codeLines[lineIndex];

      // Animate line appearance
      currentLine.style.transition = 'all 0.5s ease';
      currentLine.style.opacity = '1';
      currentLine.style.transform = 'translateX(0)';

      lineIndex++;
      setTimeout(showNextLine, lineDelay);
    } else {
      // Animation complete, show cursor
      setTimeout(() => {
        cursor.style.display = 'block';
      }, 500);
    }
  }

  // Start animation after window appears
  setTimeout(showNextLine, 1500);

  // Add hover effect for code window
  const codeWindow = document.querySelector('.code-window');
  codeWindow.addEventListener('mouseenter', () => {
    cursor.style.animationDuration = '0.6s';
  });

  codeWindow.addEventListener('mouseleave', () => {
    cursor.style.animationDuration = '1.2s';
  });
});
