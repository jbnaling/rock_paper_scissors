//change demo element using tagname

//document.getElementById("p1").innerHTML = "New text!";
//document.getElementsByTagName("P").innerHTML ="New text2"

//get the LI tag element and put it in var x
//var x = document.getElementsByTagName("LI");

//put the info in demo
//document.getElementById("demo").innerHTML = x[1].innerHTML;

//make demo invisible onload


//document.getElementById("myFrame").onload = function() {myFunction()};


document.write("write test");
console.log("test")

window.addEventListener('load', (event) => {
    document.getElementById("demo").style.visibility = "hidden";
});

function myFunction() {
  document.getElementById("demo").innerHTML = "Iframe is loaded.";
}