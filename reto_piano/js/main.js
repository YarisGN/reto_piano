const C = new Audio("notas/C.mp3");
const C2 = new Audio("notas/SC.mp3");
const D = new Audio("notas/D.mp3");
const D2 = new Audio("notas/SD.mp3");
const E = new Audio("notas/E.mp3");
const F = new Audio("notas/F.mp3");
const F2 = new Audio("notas/SF.mp3");
const G = new Audio("notas/G.mp3");
const G2 = new Audio("notas/SG.mp3");
const A = new Audio("notas/A.mp3");
const A2 = new Audio("notas/SA.mp3");
const B = new Audio("notas/B.mp3");

const reproducirNota = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volumen = 0), 2000);
};

const tocarTecla = (idTecla, nota) => {
    const tecla = document.querySelector(idTecla);
    reproducirNota(nota);
    tecla.classList.add("active");
    setTimeout(() => tecla.classList.remove("active"), 100);
};

const teclas = [ 
    {id: ".C", nota: C, key: 81},
    {id: ".C2", nota: C2, key: 50},
    {id: ".D", nota: D, key: 87},
    {id: ".D2", nota: D2, key: 51},
    {id: ".E", nota: E, key: 69},
    {id: ".F", nota: F, key: 82},
    {id: ".F2", nota: F2, key: 53},
    {id: ".G", nota: G, key: 84},
    {id: ".G2", nota: G2, key: 54},
    {id: ".A", nota: A, key: 89},
    {id: ".A2", nota: A2, key: 55},
    {id: ".B", nota: B, key: 85}
];

teclas.forEach(({ id, nota }) => {
    const tecla = document.querySelector(id);
    tecla.addEventListener("click", () => tocarTecla(id, nota));
});

window.addEventListener("keydown", ({ keyCode }) => {
    const teclaPresionada = teclas.filter(({ key }) => key === keyCode);
    if(teclaPresionada[0]) {
        const { id, nota } = teclaPresionada[0];
        tocarTecla(id, nota);
    }
});
