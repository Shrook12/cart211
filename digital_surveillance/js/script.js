document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu button');
    const closeButton = document.querySelector('.close-menu');
    const menu1 = document.querySelector('.menu1');

    // Gestion de l'ouverture du menu
    hamburgerButton.addEventListener('click', () => {
        menu1.classList.add('menu-deployed');
    });

    // Gestion de la fermeture du menu
    closeButton.addEventListener('click', () => {
        menu1.classList.remove('menu-deployed');
    });
});



const triggerArea = document.getElementById('hover-trigger');
const bodyElement = document.body;


let themeActivated = false;

triggerArea.addEventListener('mouseover', function () {

    if (!themeActivated) {

        bodyElement.classList.add('dark-theme');


        themeActivated = true;

        console.log("Theme activated permanently!");
    }



});

// === MATRIX BACKGROUND ===
const matrixCanvas = document.getElementById('matrixCanvas');
const matrixCtx = matrixCanvas.getContext('2d');

// Make the canvas full screen
matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight - 100;

// Character set
const alphabet = '01';
const fontSize = 20;
let columns = Math.floor(matrixCanvas.width / fontSize); // Number of columns

// y position of each drop
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Draw function
function drawMatrix() {
    // Fading effect
    matrixCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    matrixCtx.fillStyle = 'rgba(255, 0, 0, 1)'; // red text
    matrixCtx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        matrixCtx.fillText(text, x, y);

        if (y > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Animate
setInterval(drawMatrix, 33);

// Resize handling
window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    columns = Math.floor(matrixCanvas.width / fontSize);
    drops.length = columns;
    for (let i = 0; i < columns; i++) {
        drops[i] = drops[i] || 1;
    }
});


// draw evil smile pixel art
const smileCanvas = document.getElementById("evilSmile");
const smileCtx = smileCanvas.getContext("2d");

const pixelSize = 20;
const width = 16;
const height = 16;

smileCanvas.width = width * pixelSize;
smileCanvas.height = height * pixelSize;

smileCtx.fillStyle = "red";

const face = [
    "0000000000000000",
    "0100000000000010",
    "0010000000000100",
    "0001100000011000",
    "0000000000000000",
    "0011000000001100", // eyes
    "0111100000111110",
    "0000000000000000",
    "0000000000000000",
    "0001000000001000",
    "0000100000010000", // start of smirk
    "0000010000100000",
    "0000001111000000", // curve of smile
    "0000000000000000",
    "0000000000000000", // tip of smirk
    "0000000000000000"
];

function drawFace() {
    smileCtx.clearRect(0, 0, smileCanvas.width, smileCanvas.height);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (face[y][x] === "1") {
                smileCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
            }
        }
    }
}

drawFace();

