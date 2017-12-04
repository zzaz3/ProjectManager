const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Project = new Schema({
  wwner: String,
  name: String,
  description: String,
  team: [String],
  risks: [String],
  functionalRequirements: [String],
  nonfunctionalRequirements: [String],
  totalCost: Number,
});


module.exports = mongoose.model('Project', Project);
