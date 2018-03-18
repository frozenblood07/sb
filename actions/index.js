const fs = require("fs");

const actionsDir = __dirname; 

const actions = {};

/*
*traverse through the actions directory and require all the file in the actions directory
*therefore to add a new action no existing code needs to be changed
*/
fs.readdirSync(actionsDir).forEach(file => {
  let actionName = file.slice(0, -3);
  
  if(actionName !== 'index') {
  	actions[actionName] = require(actionsDir + "/" + file);	
  }

});


module.exports = actions;