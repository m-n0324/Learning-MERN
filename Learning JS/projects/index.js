function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Skills progress bar animation when in viewport
window.addEventListener("scroll", function() {
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".progress");

  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
    progressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = width;
    });
  }
});
// Toggle hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Scroll reveal animations
window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

// Animation for social media icons
const socialIcons = document.querySelectorAll('.social-links a i');
socialIcons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.3)';
    icon.style.color = '#007BFF';
  });
  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
    icon.style.color = '#333';
  });
});
