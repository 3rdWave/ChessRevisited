var mongoose = require('mongoose')

// schaakstukken schema
var chesspieceSchema = new mongoose.Schema(
  {
  name:String,
  position:String,
  type:String,
  color:String,
  numbr:String,
  image:String
  },{
  collection:'chesspieces'
  });

var Chesspiece = module.exports = mongoose.model('Chesspiece', chesspieceSchema);

// Get Chesspiecess exporteren in module
module.exports.getChesspieces = function(callback, limit){
  Chesspiece.find(callback).limit(limit);
};

// Get Chesspiece exporteren in module
module.exports.getChesspieceById = function(id, callback){
  Chesspiece.findById(id, callback);
};

// schaakstuk toevoegen nadat pion rank 8 haalt: promotie naar bv tweede koningin
module.exports.addChesspiece = function(pawnpromotion, callback){
  Chesspiece.create(pawnpromotion, callback);
};

// schaakstuk veranderen nadat pion rank 8 haalt: promotie naar bv tweede koningin
module.exports.updateChesspiece = function(id, newChesspiece, options, callback){
  var query = {_id: id};
  var update = {
    name:newChesspiece.name,
    position:newChesspiece.position,
    type:newChesspiece.type,
    color:newChesspiece.color,
    numbr:newChesspiece.numbr,
    image:newChesspiece.image,
    hasmoved:newChesspiece.hasmoved
  }
  Chesspiece.findOneAndUpdate(query, update, options, callback);
};