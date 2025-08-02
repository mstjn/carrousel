const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

// Variables DOM
const banner_img = document.querySelector(".banner-img");
const p = document.querySelector("p");
const dots = document.querySelector(".dots");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

// Variables d'état
let current_dot = 0;

// Affiche les points (dots) avec la classe active
function displayDots() {
  dots.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === current_dot) {
      dot.classList.add("dot_selected");
    }
    dots.appendChild(dot);
  });
}

// Met à jour le contenu de la slide actuelle
function updateSlide(index) {
  const slide = slides[index];
  banner_img.src = `./assets/images/slideshow/${slide.image}`;
  p.innerHTML = slide.tagLine;
  current_dot = index;
  displayDots();
}

// Navigation flèche gauche
arrow_left.addEventListener("click", () => {
 let newIndex;
if (current_dot === 0) {newIndex = 3} 
else {newIndex = current_dot - 1}
  updateSlide(newIndex)
});

// Navigation flèche droite
arrow_right.addEventListener("click", () => {
let newIndex;
if (current_dot === 3) {newIndex = 0} 
else {newIndex = current_dot + 1}
  updateSlide(newIndex)
});

// Initialisation
updateSlide(current_dot);
