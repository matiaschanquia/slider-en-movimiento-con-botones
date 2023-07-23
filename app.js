function movimientoSlider() {
    index++;
    if(index === cantData) {
        index = 0
    }
    let percentage = index * (-anchoImg - 24) ;
    contentSlider.style.transform = `translateX(${percentage}px)`;
    
    reiniciarBtns();
    
    if(index === cantData - 1) {
        index = -1;
    }

}

let primeraVez = true;

function activarIntervalo() {
    intervalPrincipal = setInterval(movimientoSlider, 2000);
}

function cambiarAnchoImg() {
    anchoImg = data[0].querySelector("img").width;
}

function reinciarSlider() {
    contentSlider.style.transform = `translateX(0px)`;
    index = -1;
    clearInterval(interval);
    cambiarAnchoImg();
    interval = setInterval(movimientoSlider, 2000);
}

function pararSlider() {
    clearInterval(interval);
    clearInterval(intervalPrincipal);
    clearTimeout(timeOutInterval);
}

function reanudarSlider() {
    interval = setInterval(movimientoSlider, 2000);
}

function moverSlider(direccion) {
    if(direccion === 0) {
        index -= 1;
        let percentage = index * (-anchoImg - 24);
        contentSlider.style.transform = `translateX(${percentage}px)`;
    } else {
        index += 1;
        let percentage = index * (-anchoImg - 24);
        contentSlider.style.transform = `translateX(${percentage}px)`;
    }
    reiniciarBtns();
}

function reiniciarBtns() {
    btnDer.disabled = false;
    btnIzq.disabled = false;

    if(index === cantData - 1) {
        btnDer.disabled = true;
    }

    if(index === 0) {
        btnIzq.disabled = true;
    }
}

const containerSlider = document.querySelector(".container-slider");
const contentSlider = document.querySelector(".content-slider");
let index = -1;

let data = contentSlider.querySelectorAll(".container-data");
let cantData = data.length;
let anchoImg;
cambiarAnchoImg();

let interval;
let intervalPrincipal;
let timeOutInterval = setTimeout(activarIntervalo, 1000);

setInterval(() => {
    console.log("hola");
}, 1000);


let btnIzq;
let btnDer;

document.addEventListener("DOMContentLoaded", () => {
    
    window.addEventListener("resize", reinciarSlider);

    containerSlider.addEventListener("mouseenter", pararSlider);

    containerSlider.addEventListener("mouseleave", reanudarSlider);

    btnIzq = document.querySelector(".btn-izq");
    btnDer = document.querySelector(".btn-der");
    
    btnIzq.addEventListener("click", () => {
        moverSlider(0);
    });
    btnDer.addEventListener("click", () => {
        moverSlider(1);
    });
});

