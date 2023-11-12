const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const heroImage = document.getElementById("hero-image");
let indexHero = 0;
const arrayHero = ["16x9-1", "16x9-2", "16x9-3"]

function tampilGambar(index) {
    heroImage.src = `img/${arrayHero[index]}.jpg`
};

leftButton.addEventListener("click", function () {
    indexHero = (indexHero - 1 + arrayHero.length) % arrayHero.length;
    tampilGambar(indexHero); 
});

rightButton.addEventListener("click", function () {
    indexHero = (indexHero + 1 + arrayHero.length) % arrayHero.length;
    tampilGambar(indexHero); 
});

// circle button
const circle = document.getElementById("circle");
const newCircle = document.createElement("button");
newCircle.classList.add("newCircle")
const tempat = document.getElementById("circle");

circle.addEventListener("click", 
function () {
    tempat.appendChild(newCircle);
});