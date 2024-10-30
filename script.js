let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logos');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        // Activate logo animation
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400); // Stagger the animation by 400ms
        });

        // Fade out the logo after 2 seconds
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50); // Faster fade out timing
            });
        }, 2000);

        // Move the intro out of view after fading the logo
        setTimeout(() => {
            intro.style.top = '-100vh'; // Moves the intro div off-screen
        }, 2500); // Slightly increased timeout for smoother transition
    });
});



// Function to change navbar background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {  // Change to desired scroll threshold
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Function to highlight the active section in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {  // Adjust the offset as per your navbar height
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Adjust this value to when you want the button to appear
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

