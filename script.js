
const videohistoria= document.querySelector("video");
const botonplay= document.getElementById("boton_play");
const botonpausa= document.getElementById("boton_pausa");


/*------mostrar duracion video------*/
if (videohistoria){
    const duracionvideo= document.querySelector("#duracion_video");

    const convertirtiempo= (tiempo)=>{
        let tiempoconvertido= Math.floor(tiempo);
        let minutos= Math.floor(tiempoconvertido / 60);
        let segundos= tiempoconvertido % 60;

        if (segundos<10){segundos = "0" + segundos;}

        return `${minutos}:${segundos}`;
        }

    videohistoria.addEventListener("loadedmetadata",()=>{
        let duracionfinal= convertirtiempo(videohistoria.duration);
        duracionvideo.textContent= duracionfinal;
        });

    /*-------------play y pausa---------------*/

    botonplay.addEventListener("click", ()=>{
        videohistoria.play();
        });

    botonpausa.addEventListener("click", ()=>{
        videohistoria.pause();
        }); 
}

/*------------nav-------------*/

const nav= document.querySelector('.navegacion');

const transparentar_nav= ()=>{
    if (window.scrollY > 0){
        nav.classList.add('navegacion_escroleada');} 
    else{nav.classList.remove('navegacion_escroleada');}
}
window.addEventListener('scroll', transparentar_nav);

/*-----animaciones hisotira-----*/

const divtexto= document.getElementsByClassName('.div_texto');const imageneshistoria= document.getElementsByClassName('.imageneshistoria');
const divinfo= document.getElementsByClassName('.divs_info');
    
    divinfo.addEventListener('onfocus'),(e)=>{
        divtexto.classList.add('apariciones_laterales_texto_historia_izq');
        imageneshistoria.classList.add('apariciones_laterales_texto_historia_der');
        console.log('hola');
    }
    