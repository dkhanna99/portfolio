console.log('Portfolio initialized');
// import './style.css'; // Moved to index.html

// Mouse Move Effect
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  document.documentElement.style.setProperty('--mouse-x', `${x}px`);
  document.documentElement.style.setProperty('--mouse-y', `${y}px`);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when link is clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.section, .project-card, .skill-category, .about-content, .about-image');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target); // Reveal only once
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(element => {
  element.classList.add('reveal');
  revealObserver.observe(element);
});

// Parallax Effect
document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('[data-speed]').forEach(el => {
    const speed = el.getAttribute('data-speed');
    el.style.transform = `translateY(${scrollY * speed}px)`;
  });
});



console.log('Portfolio initialized');

// Typing Effect
const typingElement = document.getElementById('typing-text');
const textToType = "Dhruv Khanna";
let charIndex = 0;



// Start typing logic
// Start typing logic
function startTyping() {
  if (!typingElement) return;

  // Clear any existing text just in case
  typingElement.textContent = '';
  charIndex = 0;

  // Start with a small delay
  setTimeout(typeText, 500);
}

function typeText() {
  if (typingElement && charIndex < textToType.length) {
    typingElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 150); // Typing speed
  }
}

// Initialize
// Since this is a module, it runs deferred (after DOM parsing), so the element should exist.
startTyping();

// EmailJS Integration
(function () {
  // Initialize EmailJS with Public Key
  emailjs.init("dmEhnsfhWVun0HcM4");

  const contactForm = document.getElementById('contact-form');
  const contactBtn = document.getElementById('contact-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Change button state
      const originalBtnText = contactBtn.innerText;
      contactBtn.innerText = 'Sending...';
      contactBtn.disabled = true;

      const serviceID = 'service_94urvuk';
      const templateID = 'template_swl44xi';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          contactBtn.innerText = 'Message Sent!';
          contactBtn.style.background = '#00f260'; // Success green
          contactBtn.style.color = '#000';
          contactForm.reset();

          setTimeout(() => {
            contactBtn.innerText = originalBtnText;
            contactBtn.disabled = false;
            contactBtn.style.background = ''; // Reset to default
            contactBtn.style.color = '';
          }, 3000);
        }, (err) => {
          contactBtn.innerText = 'Failed to Send';
          contactBtn.style.background = '#ff0055'; // Error red
          alert(JSON.stringify(err));

          setTimeout(() => {
            contactBtn.innerText = originalBtnText;
            contactBtn.disabled = false;
            contactBtn.style.background = '';
          }, 3000);
        });
    });
  }
})();
