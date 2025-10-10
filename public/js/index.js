// Prevent scrolling during splash screen
document.body.style.overflow = "hidden";

// Show splash screen and then main content
setTimeout(() => {
  document.getElementById("splashScreen").style.display = "none";
  // Re-enable scrolling after animation
  document.body.style.overflow = "auto";
}, 4000);

// Page navigation
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.add("hidden"));

  // Show selected page
  document.getElementById(pageId + "Page").classList.remove("hidden");

  // Close mobile menu if open
  document.getElementById("mobileMenu").classList.add("hidden");
}

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

// Contact form submission
function submitContactForm(event) {
  event.preventDefault();

  // Hide form and show thank you message
  document.getElementById("contactForm").classList.add("hidden");
  document.getElementById("thankYouMessage").classList.remove("hidden");
}

// Reset contact form
function resetContactForm() {
  document.getElementById("contactForm").classList.remove("hidden");
  document.getElementById("thankYouMessage").classList.add("hidden");

  // Clear form fields
  document.querySelector("#contactForm form").reset();
}
