document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Show a pop-up
  alert("Thank you for completing the form! We'll be in touch");

  // Get the form and reset it
  document.querySelector("form").reset(); // This resets the first <form> on the page
});
