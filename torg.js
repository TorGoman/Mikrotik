document.addEventListener("DOMContentLoaded", function() {
    var myElem = document.querySelector('a.btn.submit.edit-btn');
    if (myElem) {
        myElem.click();
    } else {
        window.location.href = "http://google.com";
    }
});