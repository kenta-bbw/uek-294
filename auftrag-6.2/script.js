document.addEventListener("DOMContentLoaded", function () {
    const validateBtn = document.getElementById('validate');
  
    const passwordValidation = (event) => { // Pass the event as a parameter
      const password = document.getElementById('password').value;
      const passwordRetry = document.getElementById('passwordRetry').value;
      let validPassword = true;
      let validPasswordRetry = true;
      let matchingPassword = true;
  
      const passwordValidationRegex = /[^a-zA-Z]/g;
  
      if (passwordValidationRegex.test(password)) {
        validPassword = false;
        console.log("Invalid Password: " + password);
      }
  
      if (passwordValidationRegex.test(passwordRetry)) {
        validPasswordRetry = false;
        console.log("Invalid Password retry: " + passwordRetry);
      }
  
      if (password !== passwordRetry) {
        matchingPassword = false;
        console.log("Passwords do not match");
      }
  
      if (!validPassword || !validPasswordRetry || !matchingPassword) {
        event.preventDefault();
        console.log("Validation failed. Form not submitted.");
      } else {
        console.log("Validation succeeded. Submitting the form...");
      }
    }
  
    validateBtn.addEventListener("click", passwordValidation);
  });
  