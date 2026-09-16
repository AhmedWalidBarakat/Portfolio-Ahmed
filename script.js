let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    const submitBtn = contactForm.querySelector('input[type="submit"]');
    const defaultBtnLabel = submitBtn.value;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            alert('Please fill in your name, email, and message.');
            return;
        }

        if (!contactForm.subject.value.trim()) {
            contactForm.subject.value = 'New message from portfolio contact form';
        }

        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: new FormData(contactForm),
            });
            const result = await response.json();

            if (result.success) {
                contactForm.reset();
                submitBtn.value = 'Message sent!';
            } else {
                throw new Error(result.message || 'Unknown error');
            }
        } catch (err) {
            alert('Something went wrong sending your message. Please try again, or email ahmedwalidbarakat@gmail.com directly.');
            submitBtn.value = defaultBtnLabel;
        } finally {
            submitBtn.disabled = false;
            setTimeout(() => { submitBtn.value = defaultBtnLabel; }, 4000);
        }
    });
}