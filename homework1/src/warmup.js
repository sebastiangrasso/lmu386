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

function scramble(s){
  const seperate = s.split("");
  const letters = seperate.length-1;
  for (var i = letters; i>0; i--){
    const randSpot = Math.floor(Math.random()* (i+1));
    const temp = seperate[i];
    seperate[i] = seperate[randSpot];
    seperate[randSpot] = temp;
  }
  return seperate.join("");
}

function powers(base, limit, callback){
  var exp = 0;
  while(Math.pow(base, exp) <= limit){
    callback(Math.pow(base, exp));
    exp++;
  }
}

//credit DR TOALS INTROUCTION TO JAVASCRIPT (https://cs.lmu.edu/~ray/notes/javascript/)
function* powersGenerator(base, limit) {
  let value = 1;
  while (value <= limit) {
    yield value;
    value *= base;
  }
}



module.exports = {
    change,
    stripQuotes,
    scramble,
    powers,
    powersGenerator
}
