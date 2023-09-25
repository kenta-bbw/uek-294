document.addEventListener("DOMContentLoaded", function () {
const validateBtn = document.getElementById('validate');

const passwordValidation = (event) => {
    const password = document.getElementById('password').value;
    const passwordRetry = document.getElementById('passwordRetry').value;
    const agb = document.getElementById('agb');
    let validPassword = true;
    let validPasswordRetry = true;
    let matchingPassword = true;
  
    const passwordValidationRegex = /[^a-zA-Z]/g;
    
    if (agb.checked) {
      document.getElementById('agbError').textContent = "";
      
      if (passwordValidationRegex.test(password)) {
        validPassword = false;
        console.log("Invalid Password: " + password);
        document.getElementById('passwordError').textContent = "Invalid Password! Only use letters";
      } else {
        document.getElementById('passwordError').textContent = "";
      }
  
      if (passwordValidationRegex.test(passwordRetry)) {
        validPasswordRetry = false;
        console.log("Invalid Password retry: " + passwordRetry);
        document.getElementById('passwordRetryError').textContent = "Invalid Password! Only use letters";
      } else {
        document.getElementById('passwordRetryError').textContent = "";
      }
  
      if (password !== passwordRetry) {
        matchingPassword = false;
        console.log("Passwords do not match");
        document.getElementById('passwordMatchingError').textContent = "Passwords do not match!!";
      } else {
        document.getElementById('passwordMatchingError').textContent = "";
      }
  
      if (!validPassword || !validPasswordRetry || !matchingPassword) {
        event.preventDefault();
        console.log("Validation failed. Form not submitted.");
      } else {
        console.log("Validation succeeded. Submitting the form...");
      }
    } else {
      event.preventDefault();
      document.getElementById('agbError').textContent = "AGB has to be accepted!!";
    }
  }
  
      validateBtn.addEventListener("click", passwordValidation);
    });