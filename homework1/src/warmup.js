//HOMEWORK 1, SEBASTIAN GRASSO

function change(cents){
  if (cents < 0){
    throw new RangeError("RangeError: amount cannot be negative");
  }

  const coins = [];
  const quarter = Math.floor(coins/25);
  coins = coins % 25;
  const dime = Math.floor(coins/10);
  coins = coins % 10;
  const nickel = Math.floor(coins/5);
  coins = coins % 5;
  const penny = coins;
}

module.exports = {
    change,
    stripQuotes,
    scramble,
    powers,
    powersGenerator,
    say,
    interleave,
    cylinder,
    makeCryptoFunctions,
    randomName
}

