var mongoose = require('mongoose')

// schaakbord schema
var chessboardSchema = new mongoose.Schema(
  {
  name:String,
  letterloc:String,
  numberloc:String,
  color:String,
  occupied:Boolean,
  occupiedby:String,
  withinborder:Boolean
  },{
  collection:"chessboard"
  });

var Chessboard = module.exports = mongoose.model('Chessboard', chessboardSchema);

// Get Chessboard exporteren in module
module.exports.getChessboard = function(callback, limit){
  Chessboard.find(callback).limit(limit);
}

// schaakbord status vernieuwen na bevestigen zet van speler
module.exports.updateChessboard = function(id, newChessboard, options, callback){
  var query = {_id: id};
  var update = {
    name:newChessboard.name,
    letterloc:newChessboard.letterloc,
    numberloc:newChessboard.numberloc,
    color:newChessboard.color,
    occupied:newChessboard.occupied,
    occupiedby:newChessboard.occupiedby,
    withinborder:newChessboard.withinborder
  }
  Chessboard.findOneAndUpdate(query, update, options, callback);
};

