$(document).ready((function(){console.log('game_checmoves loaded');})());

// recognize if a table cell has been clicked: change background color of cell for user feedback that the cell has been selected
// count the number of different tiles that have been clicked to limit the clicked cells to two: 
    //cell with piece of same color as player
    //cell with opponents color chesspiece or empty
    //check for reach of used chesspiece according to rules (rooks go horizontal or verical, bishops only diagonally, etc)


var numberClick = 0;
$("td").click(function(cell){
    $(this).css("background-color", "green");
    numberClick ++;
    var clickedId = cell.id;
    $(this).innerHTML= "clickedId" + numberClick + "=" + clickedId;
    $(this).closest('td').addClass('clickedId');
});

/*

other variants of above code:

var numberClick = 0;
$(document).ready(function(){
  $('td').on('click', function (cell){
    cell = $('td');
    var clickedId = cell.id;
    numberClick++;
    cell.innerHTML= "clickedId" + numberClick + "=" + clickedId;
    $(this).closest('td').addClass('clickedId');
  });
});


var numberClick = 0;
function selectSquare(cell){
  cell.innerHTML="test";
  var clickedId = cell.id;
  numberClick ++;
  cell.innerHTML= "clickedId" + numberClick + "=" + clickedId;
  getElementById(clickedId).class = "clickedId";
  $("#clickedId").css("background-color", "green");
};
*/




/*

// white pieces movements

	// pawns
		// if on their starting position, they can move one or two spaces forward. Otherwise they can move 1 space forward.
for(var i=1; i<8; i++){
	if(pawnWhite+i.currentPos == startSquare){
	movePiece = [this.currentPos [+1][0], this.currentPos [+2][0]];
	function highlightMove(movePiece){
		cell.style.color = "green";
		};
	}else{movePiece = [this.currentPos [+1][0]]
};

*/
		//after a move is executed, if a pawn meets another pawn diagonally in front of them
		//either on the end position after the move, or during the move
		//(halfway when moving 2 spaces forward from the starting position),
		//they can strike it down and take their place


// black pieces movements (check white above and adjust to go opposite direction of white)
	//..


//set pieces to starting position


//display optional moves for pieces when mouseOver


//select a chesspiece to move


//select a destination for the selected chesspiece


//confirm move for selected chesspiece


//check for additional rules and optional moves:

	/*a pawn that reaches any cell of the opposite side can be switched for a chesspiece that was lost previously in battle*/

	/*castling (move both rook and king past eachother at the same time):
	- it must be that king’s very first move
	- it must be that rook’s very first move
	- there cannot be any pieces between the king and rook to move
	- the king may not be in check or pass through check
		//note: each side has 1 king and 2 rooks, makes for 4 scenarios if all checks are passed
	*/
