$(document).ready((function(){console.log('game_buildboard loaded');})());


var letterArrayX = ["xx", "1", "2", "3", "4", "5", "6", "7", "8"];
var letterArrayA = ["A", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"];
var letterArrayB = ["B", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"];
var letterArrayC = ["C", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"];
var letterArrayD = ["D", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"];
var letterArrayE = ["E", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"];
var letterArrayF = ["F", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"];
var letterArrayG = ["G", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"];
var letterArrayH = ["H", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"];

var chessBoard = [
    letterArrayX,
	letterArrayA,
	letterArrayB,
	letterArrayC,
	letterArrayD,
	letterArrayE,
	letterArrayF,
	letterArrayG,
	letterArrayH
];

$("table tr:odd td:odd").css("background-color", "grey");
$("table tr:even td:even").css("background-color", "grey");


/*

// assigning the name of the location to the array
/*for(var i=0; i<8; i++){
	for(var j=0; j<8; j++){
		push.chessBoard[i][j] = location:i + j;
	};
};


// check if chessBoard has been constructed correctly
console.log(chessBoard);


// creating an array of array of array called chessPieces to combine all the chesspieces and using a function to assign the chesspiece objects their starting point locations
	//chessPieces = whitePieces (whiteNobles+whitePawns) + blackPieces (blackpawns + blackNobles)

		var whiteNobles = [
			rookWhite1,
			horseWhite1,
			bishopWhite1,
			queenWhite,
			kingWhite,
			bishopWhite2,
			horseWhite2,
			rookWhite2
		];

		var whitePawns = [
			pawnWhite1,
			pawnWhite2,
			pawnWhite3,
			pawnWhite4,
			pawnWhite5,
			pawnWhite6,
			pawnWhite7,
			pawnWhite8
		];

	var whitePieces = [
		whiteNobles,
		whitePawns
	];

		var blackNobles = [
			rookBlack1,
			horseBlack1,
			bishopBlack1,
			queenBlack,
			kingBlack,
			bishopBlack2,
			horseBlack2,
			rookBlack2
		];

		var blackPawns = [
			pawnBlack1,
			pawnBlack2,
			pawnBlack3,
			pawnBlack4,
			pawnBlack5,
			pawnBlack6,
			pawnBlack7,
			pawnBlack8
			];

	var blackPieces = [
		blackPawns,
		blackNobles
	];



//creating the array of arrays of arrays
//chessPieces = whitePieces (whiteNobles+whitePawns) + blackPieces (blackpawns + blackNobles)
		//note that nobles>pawns>pawns>nobles are in that particular order due to the function below used to assign starting locations
var chessPieces = [
	whitePieces,
	blackPieces
];



// setting up the board to start the game by assigning each piece to their starting location
if(currentTurn=0){
	for(var i = 1; i<=2; i++){
		for( var j = 1; j<=8; j++){
		chessBoard[i][j] = whitePieces[i][j]
		};
	};
	for(var i = 7; i<=8; i++){
		for( var j = 1; j<=8; j++){
		chessBoard[i][j] = blackPieces[i][j]

		};
	};
};
*/




//trying to create a function that displays the image file in the chessBoard-table at their starting point and
	//updates the position of that image after every move
//============================================================works!========
window.onload=function(){ 
document.getElementById("A8").innerHTML = "<img src='resources/images/bishopBlack.png'/>";
};
/*
function displayPiece() {
document.getElementById("A7").innerHTML = '<img src="resources/images/pawnBlack.png">';
};


if(currentTurn == 0){
	this.currentPos = this.startSquare
}


stating initial turn value at loading the game
currentTurn=0;
*/