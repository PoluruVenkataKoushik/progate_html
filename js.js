var x = document.getElementById("myBtn");
if (x.addEventListener) {
    x.addEventListener("click", myFunction);
} else if (x.attachEvent) {
    x.attachEvent("onclick", myFunction);
}

function myFunction() {
    alert("Hello World! welcome ");
}