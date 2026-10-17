// Aarnu's portfolio interactions — plain JavaScript, no libraries required.

const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile navigation after selecting a section.
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Prepare a message in the visitor's email app.
// This does not store messages or send anything through a server.
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#visitorName").value.trim();
  const email = document.querySelector("#visitorEmail").value.trim();
  const message = document.querySelector("#visitorMessage").value.trim();

  // Replace this placeholder with your own public-facing contact email.
  const yourEmail = "your-email@example.com";

  if (yourEmail === "your-email@example.com") {
    alert("The form is ready! Open script.js and replace your-email@example.com with your contact email to enable it.");
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`From: ${name}\nReply to: ${email}\n\n${message}`);
  window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;

