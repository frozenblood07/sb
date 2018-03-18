//get the action and corresponding arguments in the object
const getArgs = () => {
  let arguments = process.argv;
  arguments.splice(0, 2);
  return {
    action: arguments.shift(),
    parameters: arguments
  };
};

const actions = require('./actions');

const main = () => {
  let args = getArgs();
  let output = args.action !== undefined ? args.action in actions ? actions[args.action](args.parameters) : "Invalid action" : "No input provided";
  console.log(output);
};

main();
