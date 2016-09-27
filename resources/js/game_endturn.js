$(document).ready((function(){console.log('game_endturn loaded');})());

//end of turn: validate if turn should indeed be passed?
//initiate following checks upon clicking the button 'end turn'


	//add the confirmed move to the list(logMessages) on the right side
/*
var logMessages = new Array();
var logMoveNow = logMove[currentTurn];
var logMoveNow = currentPlayer + " moved " + currentPiece + " from " + startPos + " to " + endPos + ".";
logMessages += [logMoves + "\n";];

function logMoves(){
	for (var i = 0; i < logMessages.length; i++);
    document.write(logMessages[i]);
}
*/

	// switch active player
		// alert turn has passed to other player
			// (activePlayer with boolean:true is white, actiePlayer with boolean:false is black)
function switchPlayer(activePlayer, currentTurn){
	if(activePlayer == true){
		alert("Passing the turn to player " + player2 + "!");
		currentTurn++;
		activePlayer = false;
		}
	else{
		alert("Passing the turn to player " + player1 + "!");
		currentTurn++;
		activePlayer = true;}
		};
