
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const contactPage = document.getElementById("contact-page");
  
    submitButton.addEventListener("click", function () {
      
        const messageElement = document.createElement("p");
        messageElement.textContent = "Your message has been received!";
        messageElement.style.fontSize = "28px";
  
       
        contactPage.innerHTML = '';
  
       
        contactPage.appendChild(messageElement);
    });
  });