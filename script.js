document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Show a pop-up
  alert("Thank you for your message! We'll get back to you shortly.");

  // Optionally, clear the form fields
  this.reset();
});
// Include EmailJS script in your HTML
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Send the email
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
      .then(function (response) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); // Reset the form
      })
      .catch(function (error) {
        alert("Failed to send message. Please try again later.");
        console.error("Error:", error);
      });
  });
