

const niceSmileCanvas = document.getElementById("niceSmile");
const niceSmileCtx = niceSmileCanvas.getContext("2d");

niceSmileCanvas.width = width * pixelSize;
niceSmileCanvas.height = height * pixelSize;

niceSmileCtx.fillStyle = "black";

const niceSmileData = [
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0001100000011000",
    "0001000000010000",
    "0001100000011000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000100000010000",
    "0000011111100000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000"
];

function drawNiceSmileFace() {
    niceSmileCtx.clearRect(0, 0, niceSmileCanvas.width, niceSmileCanvas.height);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (niceSmileData[y][x] === "1") {
                niceSmileCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
            }
        }
    }
}


drawNiceSmileFace();



