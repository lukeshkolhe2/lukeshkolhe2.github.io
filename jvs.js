// var se;
var te;
function sel() {
    // var n = document.getElementById("name");
    // n.value=n.value.toUpperCase();
    se = document.getElementById("name").value;
    localStorage.setItem('nam2',se);
    // localStorage.setItem('nam2',"hey");
    te = localStorage.getItem('nam2');
    document.getElementById("nam2").innerHTML="hey"+ te;
}
function loadin(){
    var t = localStorage.getItem('nam2');
    document.getElementById("nam3").innerHTML="Hey " + t;

}