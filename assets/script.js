const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// fonction pour afficher les points 
function displayDots() {
	document.querySelector(".dots").innerHTML = ""
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  if (i === current_dot){
	dot.classList.add("dot")
	dot.classList.add("dot_selected")
  }else {
	dot.classList.add("dot")
  }
  dots.appendChild(dot);
}
}


// définition des variables
let banner_img = document.querySelector(".banner-img")
let image_src = banner_img.getAttribute("src").split("/").pop()
let p = document.querySelector("p")
let current_dot = 0
let dots = document.querySelector(".dots")
let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")
displayDots()

// actions au clic de la fleche gauche
arrow_left.addEventListener("click", () => {
	// boucle sur le tableau slides
	for (let i = 0; i<slides.length;i++){
		// controle de l'image actuelle pour afficher la suivante
		// possible aussi avec un switch/case
		if (slides[i].image === image_src){
			if (i === 0){
			image_src = slides[3].image
			p.innerHTML = slides[3].tagLine
			current_dot = 3
			}else {
			image_src = slides[i-1].image
			p.innerHTML = slides[i-1].tagLine
			current_dot = i-1
			}
			displayDots()
			break // evite de changer l'image a chaque tour de boucle
		}
	}
	banner_img.src = `./assets/images/slideshow/${image_src}`
})

// action au clic de la fleche droite = même principe qu'a gauche 
arrow_right.addEventListener("click", () => {
	for (let i = 0; i<slides.length;i++){
		if (slides[i].image === image_src){
			if (i === 3){
			image_src = slides[0].image
			p.innerHTML = slides[0].tagLine
			current_dot = 0
			}else {
			image_src = slides[i+1].image
			p.innerHTML = slides[i+1].tagLine
			current_dot = i+1
			}
			displayDots()
			break
		}
	}
	banner_img.src = `./assets/images/slideshow/${image_src}`
})






