document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you can add code to send the data to your server if needed

    // Show success message
    document.getElementById("form-response").style.display = "block";
    document.getElementById(
      "form-response"
    ).innerText = `Thank you, ${name}! Your message has been sent successfully.`;

    // Clear the form
    document.getElementById("contact-form").reset();
  });
