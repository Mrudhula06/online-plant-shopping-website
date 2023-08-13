function validateForm() {
    // Get input field values
    const fullName = document.getElementById("fullName").value;
    const addressLine = document.getElementById("addressLine").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipCode = document.getElementById("zipCode").value;
  
    // Validate full name
    if (fullName === "") {
      document.getElementById("fullNameError").textContent = "Please enter your full name";
      return false;
    }
  
    // Validate address
    if (addressLine === "") {
      document.getElementById("addressLineError").textContent = "Please enter your address";
      return false;
    }
  
    // Validate city
    if (city === "") {
      document.getElementById("cityError").textContent = "Please enter your city";
      return false;
    }
  
    // Validate state
    if (state === "") {
      document.getElementById("stateError").textContent = "Please enter your state";
      return false;
    }
  
    // Validate zip code
    if (zipCode === "") {
      document.getElementById("zipCodeError").textContent = "Please enter your zip code";
      return false;
    }
  
    // All fields are valid, you can perform further actions like form submission
    return true;
  }