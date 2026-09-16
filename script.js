let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const phone = contactForm.phone.value.trim();
        const subject = contactForm.subject.value.trim() || 'Portfolio contact form message';
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            alert('Please fill in your name, email, and message.');
            return;
        }

        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\n${message}`;
        const mailtoLink = `mailto:ahmedwalidbarakat@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    });
}