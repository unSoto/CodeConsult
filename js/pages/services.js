// JavaScript для интерактивных вкладок категорий услуг
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const categoryPanels = document.querySelectorAll('.category-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      // Убираем активный класс у всех кнопок
      tabButtons.forEach(btn => btn.classList.remove('active'));

      // Добавляем активный класс к нажатой кнопке
      button.classList.add('active');

      // Скрываем все панели
      categoryPanels.forEach(panel => {
        panel.classList.remove('active');
      });

      // Показываем нужную панель
      const targetPanel = document.getElementById(category);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
});

// JavaScript для плавающих строк кода
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('code-lines-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = 300; // Высота баннера

    const codeLines = [
      'function render() {',
      'const data = fetchData();',
      'return <div>{data}</div>;',
      '}',
      'console.log("Hello, CodeConsult!");'
    ];

    const lines = [];
    const maxLines = 20;

    class Line {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.text = codeLines[Math.floor(Math.random() * codeLines.length)];
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.1 + 0.3;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
        ctx.font = '14px monospace';
        ctx.fillText(this.text, this.x, this.y);
      }

      update() {
        this.y -= this.speed;
        if (this.y < -20) {
          this.y = canvas.height + 20;
          this.text = codeLines[Math.floor(Math.random() * codeLines.length)];
        }
        this.draw();
      }
    }

    function createLines() {
      for (let i = 0; i < maxLines; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        lines.push(new Line(x, y));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      lines.forEach(line => line.update());
      requestAnimationFrame(animate);
    }

    createLines();
    animate();
  }
});
