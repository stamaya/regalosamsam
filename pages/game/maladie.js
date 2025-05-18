var images = [
	
    "../../assets/img/maladie/11.png",
    "../../assets/img/maladie/12.png",
    "../../assets/img/maladie/13.png",
	"../../assets/img/maladie/14.png",
    "../../assets/img/maladie/15.png",
    "../../assets/img/maladie/16.png",
    "../../assets/img/maladie/17.png",
	"../../assets/img/maladie/18.png",
    "../../assets/img/maladie/19.png",
    "../../assets/img/maladie/20.png",
    "../../assets/img/maladie/21.png",
	"../../assets/img/maladie/22.png",
    "../../assets/img/maladie/23.png",
	"../../assets/img/maladie/24.png",
    "../../assets/img/maladie/25.png",
    "../../assets/img/maladie/26.png",
    "../../assets/img/maladie/27.png",
]

var reponses = [
	"",
	"Dexter",
	"Gabrielle Solis",
	"Tony Soprano",
	"Lucas Scott",
	"Byers",
	"Otis & Jean",
	"Meredith Grey",
	"Adrian Monk",
	"Halliwell",
	"Tom Shelby",
	"Annalise Keating",
	"El Profesor",
	"",
	"Tony Soprano",
	"Patrick Jane",
	"Morgane Alvaro",
	"El profesor",
	"Dwight Schrute",
	"Peyton Sawyer",
	"Monica Geller",


]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); 
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		if(id<images.length-1)
		{
			id++;
			raz();
		}
		document.getElementById("solution").classList.add("btn") ;
	}

 	