document.addEventListener('DOMContentLoaded', function() {
    setupForm;
  });

function setupForm() {
    document.getElementById("form").onsubmit = checkFrom;
    document.getElementById("pseudonym").onclick = resetFirstname;
    document.getElementById("email").onclick = resetEmail;
    document.getElementById("message").onclick = resetMessage;
}

function resetFirstname() { document.getElementById("pseudonym").className = ""}
function resetEmail() { document.getElementById("email").className = ""}
function resetMessage() { document.getElementById("message").className = ""}

function checkFrom() {
    var formOK = true;
    var feedback = "";
    // check pseudonym
    firstname = document.getElementById("pseudonym").value;
    if (firstname.length < 2 ) {
        formOK = false;
        feedback += "<li>You have not filled in a pseudonym</li>";
        document.getElementById("pseudonym").className = "error";
    }

    //check email
    mail = document.getElementById("email").value;
    if (mail.length < 6 ) {
        formOK = false;
        feedback += "<li>You have not filled in an E-mail</li>";
        document.getElementById("email").className = "error";
    }
    
    //check message
    message = document.getElementById("message").value;
    if (message.length < 5) {
        formOK = false;
        feedback += "<li>Your message is too short</li>";
        document.getElementById("message").className = "error";
    }
    if (message.length > 200) {
        formOK = false;
        feedback += "<li>Your message is too long</li>";
        document.getElementById("message").className = "error";
    }

    if(formOK == false) {
        document.getElementById("feedback").innerHTML = "<b>Errors:</b>" + "<ul>" + feedback + "</ul>";
    }
    
    return formOK;
}