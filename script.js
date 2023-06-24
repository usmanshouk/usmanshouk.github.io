// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Toggle active class for navigation links
const navigationLinks = document.querySelectorAll("nav ul li a");
navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigationLinks.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");
  });
});

// Add active class to navigation link based on scroll position
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      const targetLink = document.querySelector(
        `nav ul li a[href="#${section.id}"]`
      );
      navigationLinks.forEach((navLink) => navLink.classList.remove("active"));
      targetLink.classList.add("active");
    }
  });
});
