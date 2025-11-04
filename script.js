
const videohistoria =document.querySelector("video");
const botonplay =document.getElementById("boton_play");
const botonpausa =document.getElementById("boton_pausa");

const body= document.querySelector("body");

const duracionvideo = document.querySelector("#duracion_video")

body.addEventListener("DOMContentLoaded", ()=>{
    let duracionconvertida= convertirtiempo(videohistoria.duration);

    duracionvideo.textContent = videohistoria.duration;
});



const convertirtiempo= (tiempo)=>{
    if(tiempo>60){
        let minutos=tiempo/60;}
    else{
        minutos=0;
    }
    segundos= tiempo%60;
    return `${minutos}:${segundos}`;
}
/*----------------------------*/

botonplay.addEventListener("click", ()=>{
    videohistoria.play();
    console.log("El video se esta reproduciendo");
});

botonpausa.addEventListener("click", ()=>{
    videohistoria.pause();
    console.log("El video se ha pausado");
}); 