function handleFormSubmit(event){
    event.preventDefault();//prevent the default form submission behavior


    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    if (name === "" || email === ""){

        alert('Please fill in all required fields');
    }else{
        alert('Form submitted successfully!');
    }

}
document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the form to handle form submission
    document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);
});