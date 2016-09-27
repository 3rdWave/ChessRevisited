$(document).ready((function(){console.log('check on document ready loaded');})());

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


/*
var numberClick = 0;
$("td").click(function(cell){
    console.log('clicked');
    //$(this).css("background-color", "green");
    //numberClick ++;
    //var clickedId = cell.id;
    //$(this).innerHTML= "clickedId" + numberClick + "=" + clickedId;
    //$(this).closest('td').addClass('clickedId');
});

$(document).ready(function(){
  $("td").on('click', function (cell){
    var clickedId = cell.id;
    numberClick++;
    cell.innerHTML= "clickedId" + numberClick + "=" + clickedId;
    $(this).closest('td').addClass('clickedId');
  });
});
*/


$(document).ready((function(){

var table = document.getElementById("tableID");
    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].cells[j].onclick = function () {
                tableText(this);
            };
        }
    };

function tableText(tableCell) {
        confirm(tableCell.id);

return tableText();        
    };
})());