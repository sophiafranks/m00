function validateForm(event) {
  event.preventDefault();

  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  var errorFname = document.getElementById("error-fname");
  var errorEmail = document.getElementById("error-email");
  var errorComment = document.getElementById("error-comment");

  // Reset error messages
  errorFname.textContent = "";
  errorEmail.textContent = "";
  errorComment.textContent = "";

  // Validate fields
  var isValid = true;

  if (fname.trim() === "") {
    errorFname.textContent = "Please enter your name.";
    isValid = false;
  }

  if (email.trim() === "") {
    errorEmail.textContent = "Please enter your email address.";
    isValid = false;
  } else {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorEmail.textContent = "Please enter a valid email address.";
      isValid = false;
    }
  }

  if (comment.trim() === "") {
    errorComment.textContent = "Please enter your comments.";
    isValid = false;
  }

  if (isValid) {
    console.log("Submitting the form...");
    document.getElementById("myForm").submit();
  } else {
    console.log("Form validation failed. Form will not be submitted.");
  }

  return false;
}
