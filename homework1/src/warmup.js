//HOMEWORK 1, SEBASTIAN GRASSO

function change(cents){
  if (cents < 0){
    throw new RangeError("RangeError: amount cannot be negative");
  }

  const coins = [];
  const quarters = Math.floor(cents/25);
  cents = cents % 25;
  const dimes = Math.floor(cents/10);
  cents = cents % 10;
  const nickels = Math.floor(cents/5);
  cents = cents % 5;
  const pennies = cents;

  coins.push(quarters);
  coins.push(dimes);
  coins.push(nickels);
  coins.push(pennies);

  return coins;
}

function stripQuotes(string){
  return string.replace(/['"]+/g, '');
}

module.exports = {
    change,
    stripQuotes
}
