var mongoose = require('mongoose')

// player turns log :lijst met zetten van spelers schema
var turnlogSchema = new mongoose.Schema(
  {
  turn:Number,
  currentplayer:String,
  selectedchesspiece:String,
  startletterloc:String,
  startnumberloc:String,
  targetletterloc:String,
  targetnumberloc:String,
  defeatedchesspiece:String,
  kingcheck:String,
  kingcheckmate:String,
  create_date:{
        type: Date,
        default: Date.now
        }
  },{
  collection:"turnlog"
  });

var Turnlog = module.exports = mongoose.model('Turnlog', turnlogSchema);

// Get Turnlog: exporteren in module
module.exports.getTurnlog = function(callback, limit){
  Turnlog.find(callback).limit(limit);
}

// post turnlog: beurt toevoegen na afronden vorige beurt
module.exports.addTurnlog = function(newturn, callback){
  Turnlog.create(newturn, callback);
};

