function getUserNameOne() {
    var playerOne = document.getElementById('playerOne').value;
    var inputNameOne = document.getElementById('inputNameOne');

    if (playerOne.length < 3) {
        alert('Username must contain at least 3 characters');
        //alert('Please use a name that containts at least 3 characters, player 1.');
    } else {
        inputNameOne.textContent = playerOne;
        //alert(playerOne);
    }
};


function getUserNameTwo() {
    var playerTwo = document.getElementById('playerTwo').value;
    var inputNameTwo = document.getElementById('inputNameTwo');

    if (playerTwo.length < 3) {
        alert('Username must contain at least 3 characters');
        //alert('Please use a name that containts at least 3 characters, player 2.');
    } else {
        inputNameTwo.textContent = playerTwo;
        //alert(playerTwo);
    }
};

var submitNamesButton = document.getElementById('submitNamesButton');
submitNamesButton.addEventListener('click', getUserNameOne(), false);
submitNamesButton.addEventListener('click', getUserNameTwo, false);


window.onload=function(){ 
document.getElementById("inputNameOne").innerHTML = playerOne;
document.getElementById("inputNameTwo").innerHTML = playerTwo;
};