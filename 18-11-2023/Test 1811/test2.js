var a1 = 6
var b = 10
var s = 15
var text2 = document.getElementById("textpwd").value;

function callevent(e) {

    e.preventDefault();

    if (text2 < a1) {
        alert("the password is week ")

    }
    else {
        alert("the password is strong ")
    }
}
callevent(e)
