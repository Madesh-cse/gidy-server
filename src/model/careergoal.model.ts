const moongose = require("mongoose");
const Schema = moongose.Schema;

const CarrerSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  longTermGoal: {
    type: String,
    required: true,
  },
  aspirational:{
    type:String,
    required: true
  },
  inspiration: 
  { 
    type: String,
    required: true 
  },
  currentAim: 
  { 
    type: String,
    required: true 
},
});

const CarrerData = moongose.model("CarrerGoal", CarrerSchema);
export default CarrerData
