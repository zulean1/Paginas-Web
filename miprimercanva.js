function iniciar(){
var elemento=document.getElementById('lienzo');
lienzo=elemento.getContext('2d');
lienzo.font="bold 24px verdana, sans-serif";
lienzo.textAlign="start";
lienzo.fillText("Mi mensaje", 100,100);
}
window.addEventListener("load", iniciar, false);