const fotos = [
    { src: "fotos/1.jpg", legenda: "Você é incrível, mãe!" },
    { src: "fotos/2.jpg", legenda: "Obrigado por tudo, mãe!" },
    { src: "fotos/3.jpg", legenda: "Seu amor é meu guia." }
];

let indice = 0;
let intervalo;

function iniciarAlbum() {
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("album").style.display = "block";
    document.getElementById("musica").play();
    mostrarFoto();
    iniciarSlideshow();
}

function mostrarFoto() {
    document.getElementById("foto").src = fotos[indice].src;
    document.getElementById("legenda").innerText = fotos[indice].legenda;
}

function proximaFoto() {
    indice = (indice + 1) % fotos.length;
    mostrarFoto();
}

function fotoAnterior() {
    indice = (indice - 1 + fotos.length) % fotos.length;
    mostrarFoto();
}

