function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");

  const themeIcon = document.querySelector(".theme-switcher .icon");
  const hamburgerThemeIcon = document.querySelector(".menu-links .icon");

  const isDark = body.classList.contains("dark-theme");
  const sunIcon = "tejas_port__1/sunnn.jpg";
  const moonIcon = "tejas_port__1/mooonn.jpg";

  if (themeIcon) {
    themeIcon.src = isDark ? sunIcon : moonIcon;
  }
  if (hamburgerThemeIcon) {
    hamburgerThemeIcon.src = isDark ? sunIcon : moonIcon;
  }
}

// Function for typewriter animation
function setupTypewriter(element) {
    const text = "Computer Science Student";
    let i = 0;
    element.innerHTML = ""; // Clear existing text
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 150); // Adjust typing speed here (in ms)
        }
    }
    
    type();
}


document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((section) => {
    observer.observe(section);
  });

  // Setup typewriter on page load
  const typewriterElement = document.getElementById("typewriter");
  if(typewriterElement) {
    setupTypewriter(typewriterElement);
  }
});