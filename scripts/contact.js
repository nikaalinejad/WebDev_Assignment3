// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

//button clicked
submitButton.onclick = function() {
    
    //replace contact page content
    contactPage.innerHTML = "<p id='thanks'>Thank you for your message!</p>";

    //change style (font size) of thanks_message
    const thanks_message = document.getElementById("thanks")
    thanks_message.style.fontSize = "24px";

};

