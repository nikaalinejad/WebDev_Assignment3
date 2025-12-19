//submit button pressed on contact page 
//content of contact page must be replaced

const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

//button clicked
submitButton.onclick = function() {
    
    //replace contact page content
    contactPage.innerHTML = "<p id='thanks'>Thank you for your message!</p>";

    //change style (font size) of thanks_message
    const thanks_message = document.getElementById("thanks");
    thanks_message.style.fontSize = "24px";

};
