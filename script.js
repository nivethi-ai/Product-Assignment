function toggleNightMode() {
    document.body.classList.toggle("night-mode");
}

// Set active class on click
function setActive(link) {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
}

// Update active link based on scroll position
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const links = document.querySelectorAll(".nav-link");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            links.forEach(link => link.classList.remove("active"));
            links[index].classList.add("active");
        }
    });
});
const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach((question) => {
      question.addEventListener('click', () => {
        // Toggle active class for the clicked question
        question.classList.toggle('active');

        // Close other open answers
        faqQuestions.forEach((q) => {
          if (q !== question) {
            q.classList.remove('active');
            q.nextElementSibling.style.display = 'none';
          }
        });

        // Toggle display of the associated answer
        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
    // JavaScript for Pagination Functionality
const bullets = document.querySelectorAll('.bullet');
const teamContainer = document.querySelector('.team-container');

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    // Remove active class from all bullets
    bullets.forEach((b) => b.classList.remove('active'));

    // Add active class to the clicked bullet
    bullet.classList.add('active');

    // Change team container to the corresponding slide
    const offset = index * -300; // Adjust offset for each slide
    teamContainer.style.transform = `translateX(${offset}px)`;
    teamContainer.style.transition = 'transform 0.5s ease-in-out';
  });
});
