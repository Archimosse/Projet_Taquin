var canvas = document.getElementById('canvas');


    var W = 480;
	var H = 480;
	var T = 120;								// Taille des pièces
	var L = H/T; 								// Lignes
	var C = W/T;								// Colonnes
	var posX = canvas.offsetLeft;
	var posY = canvas.offsetTop;
	var repere; 
	var stockPieces;							// tableau de stockage des pièces
	var timer;
	init();

    // initialisation du jeu
	function init() {
 
		canvas.width = W;
		canvas.height = H;
		stockPieces = [];
 
		// boucle sur le nombre de pièces
		for (var i=0; i<L*C;i++){
			var piece = {x:i%C*T, y:parseInt(i/C)*T, width:T, height:T, place:i, depart:false, alpha:1};
			stockPieces.push(piece);					// ajout du conteneur au stock
			if(!i) {							// si la pièce est la première
				piece.alpha=0;						// elle est transparente
				piece.depart=true;					// elle est déjà mélangée
			} 
		}
 
		repere = {x:0,y:0};
		timer = setInterval(melange,15);
		render();
		canvas.addEventListener("click", choisir, false);
		canvas.addEventListener("mousemove", reperePos, false);
	}