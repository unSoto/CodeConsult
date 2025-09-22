// JavaScript для интерактивного FAQ аккордеона
document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Закрываем все открытые FAQ
      document.querySelectorAll('.faq-item.active').forEach(item => {
        item.classList.remove('active');
      });

      // Если текущий не был активным, открываем его
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
});

// JavaScript для потока кода (если canvas существует)
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('code-flow-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const codeStreams = [];
  const streamCount = 100;
  const symbols = '01';

  // Настройки потока кода
  class CodeStream {
    constructor(x) {
      this.x = x;
      this.y = Math.random() * canvas.height;
      this.speed = Math.random();
      this.symbols = [];
      this.length = Math.floor(Math.random() * 10 + 5);
      this.generateSymbols();
    }

    generateSymbols() {
      for (let i = 0; i < this.length; i++) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.symbols.push({ char: symbol, opacity: Math.random() });
      }
    }

    update() {
      this.y += this.speed;
      if (this.y > canvas.height) this.y = -this.length * 20;

      this.symbols.forEach((symbol, index) => {
        symbol.opacity -= 0.01;
        if (symbol.opacity <= 0) symbol.opacity = 1;
      });
    }

    draw() {
      this.symbols.forEach((symbol, index) => {
        ctx.fillStyle = `rgba(255, 0, 127, ${symbol.opacity})`;
        ctx.font = '16px monospace';
        ctx.fillText(symbol.char, this.x, this.y + index * 20);
      });
    }
  }

  // Инициализация потоков
  function init() {
    codeStreams.length = 0;
    for (let i = 0; i < streamCount; i++) {
      const x = i * 20;
      codeStreams.push(new CodeStream(x));
    }
  }

  // Анимация потока
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    codeStreams.forEach(stream => {
      stream.update();
      stream.draw();
    });

    requestAnimationFrame(animate);
  }

  // Обновление размеров canvas
  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    init();
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  animate();
});
