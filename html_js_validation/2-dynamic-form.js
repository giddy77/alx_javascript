// Function to generate input fields based on the selected value
function generateInputFields(selectedValue) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previous input fields
  
    for (let i = 1; i <= selectedValue; i++) {
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.name = "field" + i;
      inputField.placeholder = "Field " + i;
      inputContainer.appendChild(inputField);
    }
  }
  
  // Function to validate the form before submission
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission by default
    const inputContainer = document.getElementById("inputContainer");
    const inputFields = inputContainer.getElementsByTagName("input");
  
    // Check if any of the input fields are empty
    let isFormValid = true;
    for (let i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value.trim() === "") {
        isFormValid = false;
        break;
      }
    }
  
    if (isFormValid) {
      // If all fields are filled, submit the form
      document.getElementById("dynamicForm").submit();
    } else {
      // If any field is empty, display an error message
      alert("Please fill in all fields.");
    }
  }
  
  // Event listener to detect changes in the dropdown menu
  const numFieldsDropdown = document.getElementById("numFields");
  numFieldsDropdown.addEventListener("change", function () {
    const selectedValue = parseInt(numFieldsDropdown.value);
    generateInputFields(selectedValue);
  });
  
  // Event listener to validate the form on submission
  const dynamicForm = document.getElementById("dynamicForm");
  dynamicForm.addEventListener("submit", validateForm);
  