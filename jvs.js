var se;
var te;
function sel() {
    se = document.getElementById("name").value;
    localStorage.setItem('nam2',se);
}
function loadin(){
    var t = localStorage.getItem('nam2');
    document.getElementById("nam3").innerHTML="Hey " + t;

}
