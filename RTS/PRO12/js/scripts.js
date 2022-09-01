
function checkDate() {
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    var testDate = prompt("introduzca una fecha");
    if (date_regex.test(testDate)) {
        document.getElementById("message").innerHTML = "Date follows dd/mm/yy format";
    }
    else {
        document.getElementById("message").innerHTML = "Invalid date format";
    }
}


function checkEmail() {
    var email = prompt("introduzca su correo electrónico");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
        alert("The email address " + email + " is correct.");
    } else {
        alert("The email address is wrong.");
    }
}


/*function escapeHTML(text) (
    var replacements = [["&", "&amp"], ["\"", "&quot; "], ["< ", "&lt;"], [">", "&gt;"]];
forEach(replacements, function (replace) {
    text = text.replace(replace[0], replace[1]);
});
return text;*/

