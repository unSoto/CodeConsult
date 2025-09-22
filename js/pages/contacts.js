// Topic selector functionality
document.addEventListener('DOMContentLoaded', function() {
    const topicSelector = document.querySelector('.topic-selector');
    const topicSelected = document.getElementById('selected-topic');
    const topicOptions = document.getElementById('topic-options');
    const topicPlaceholder = document.querySelector('.topic-placeholder');
    const subjectInput = document.getElementById('subject-input');

    // Toggle dropdown
    topicSelected.addEventListener('click', function() {
        topicSelector.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!topicSelector.contains(e.target)) {
            topicSelector.classList.remove('active');
        }
    });

    // Handle option selection
    topicOptions.addEventListener('click', function(e) {
        const option = e.target.closest('.topic-option');
        if (option) {
            const value = option.getAttribute('data-value');
            const title = option.querySelector('.topic-title').textContent;

            // Update selected display
            topicPlaceholder.textContent = title;
            topicSelected.classList.add('selected');

            // Update hidden input
            subjectInput.value = value;

            // Close dropdown
            topicSelector.classList.remove('active');
        }
    });

    // Character counter for textarea
    const messageTextarea = document.getElementById('message');
    const charCount = document.querySelector('.char-count');

    messageTextarea.addEventListener('input', function() {
        const count = this.value.length;
        charCount.textContent = count + ' / 500';

        if (count > 450) {
            charCount.style.color = '#ff6b6b';
        } else if (count > 400) {
            charCount.style.color = '#ffa500';
        } else {
            charCount.style.color = '#888';
        }
    });

    // Form submission (you can add your own logic here)
    const contactForm = document.querySelector('.chat-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = subjectInput.value;
        const message = messageTextarea.value.trim();

        if (!name || !email || !subject || !message) {
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }

        // Here you would typically send the data to your server
        console.log('Form data:', { name, email, subject, message });

        // Show success message (you can customize this)
        alert('Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в течение 2 часов.');

        // Reset form
        contactForm.reset();
        topicPlaceholder.textContent = 'Выберите тему проекта';
        topicSelected.classList.remove('selected');
        charCount.textContent = '0 / 500';
        charCount.style.color = '#888';
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
