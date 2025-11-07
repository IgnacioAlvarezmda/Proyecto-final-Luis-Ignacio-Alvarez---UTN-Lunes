
const videohistoria= document.querySelector("video");
const botonplay= document.getElementById("boton_play");
const botonpausa= document.getElementById("boton_pausa");
const duracionvideo= document.querySelector("#duracion_video");

/*------mostrar duracion video------*/
if (videohistoria){
    ;
    const convertirtiempo= (tiempo)=>{
        let tiempoconvertido= Math.floor(tiempo);
        let minutos= Math.floor(tiempoconvertido / 60);
        let segundos= tiempoconvertido % 60;
        if (segundos<10){segundos = "0" + segundos;}
        return `${minutos}:${segundos}`;
        }
    
    let duracionfinal= convertirtiempo(videohistoria.duration);
    
    videohistoria.addEventListener("timeupdate",()=>{
        duracionvideo.textContent= duracionfinal;
        let tiempoActual = convertirtiempo(videohistoria.currentTime);
        duracionvideo.textContent = `${tiempoActual} / ${duracionfinal}`;
    });

    botonplay.addEventListener("click",()=>{
        videohistoria.play();
        });
    botonpausa.addEventListener("click",()=>{
        videohistoria.pause();
        }); 
} 

/*------------nav-------------*/

const nav= document.querySelector('.navegacion');

const transparentar_nav=()=>{
    if (window.scrollY > 0){
        nav.classList.add('navegacion_escroleada');} 
    else{nav.classList.remove('navegacion_escroleada');}
}
window.addEventListener('scroll', transparentar_nav);

/*-----animaciones hisotira-----*/



function aparecer_scroll() {
    
    const divs_que_aparecen = document.querySelectorAll('.divs_info');
    
    const alturaventana= window.innerHeight;
    const altura_activadora= alturaventana*0.85;

    divs_que_aparecen.forEach(elemento=>{
        const posicionelemento= elemento.getBoundingClientRect().top;

        if (posicionelemento<altura_activadora){
            elemento.classList.add('mostrar');}
        });
}

window.addEventListener('scroll', aparecer_scroll);
document.addEventListener('DOMContentLoaded', aparecer_scroll);

/*----------------JUEGO---------------------*/

const botonreiniciar= document.getElementById('botonreiniciar');
const piezas= document.querySelectorAll(".cajapiezas"); 
const cajas= document.querySelectorAll('.caja');


piezas.forEach(pieza=>{
    if (!pieza.id) {
        return; 
    }

    pieza.addEventListener('dragstart',(event)=>{
        console.log(event.target.id);
        event.dataTransfer.setData('text/plain',event.target.id);
    });
}); 


cajas.forEach(caja=>{
    caja.addEventListener('dragover',(e)=>{
        e.preventDefault(); 
    });

    caja.addEventListener('drop',(e)=>{
        e.preventDefault();

        const data = e.dataTransfer.getData('text/plain');
        const piezaarrastrada= document.getElementById(data);

        e.currentTarget.innerHTML="";
        e.currentTarget.appendChild(piezaarrastrada);
    });
});

const reiniciar=()=>{
    location.reload();
};
botonreiniciar.addEventListener('click', reiniciar);

/* 
LAS IMAGENES SE ME SUPERPONEN, NO CONTEMPLA QUE SI HAY OTRA IMAGEN DENTRO, NO DEBE METER UNA IMAGEN MAS

TAMPOCO LOGRO AUTENTICAR SI LAS IMAGENES ESTAN EN EL LUGAR CORRECTO

*/
