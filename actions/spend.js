const calculatePercentage = amounts => {
  if (amounts.every(e => e >= 50)) return 0.2;
  if (amounts.every(e => e >= 20)) return 0.15;
  if (amounts.every(e => e >= 10)) return 0.1;
  return 0.05;
};

/**
* returns cashback awarded rounded to 2 decimal places which is
* based on amounts provided in the input
*
* @param [String] amounts
* @return String
*/
const spend = amounts => {
  if(amounts.length == 0) {
    return "No arguments provided."
  }

  let highestAmount = Math.max.apply(Math, amounts);
  let percentage = calculatePercentage(amounts.map(v => parseInt(v)));
  let cashback = Math.ceil(highestAmount * percentage).toFixed(2);

  if (isNaN(cashback)) {
    return "Amount must be numeric.";
  }

  return parseInt(cashback) === 0 ? "No cashback" : "Award cashback: " + cashback;
};


module.exports = spend;
