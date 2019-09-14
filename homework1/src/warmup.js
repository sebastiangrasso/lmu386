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
    const temp = seperate[i];
    const randSpot = Math.floor(Math.random()* (i+1));
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

function interleave(arr, ...values){
  const larger = Math.max(arr.length, values.length);
  const weave = [];

  for (var a = 0; a < larger; a++){
    if (a < arr.length)
      weave.push(arr[a]);
    if (a < values.length)
      weave.push(values[a]);
  }
  return weave;
}
//credit DR TOALS INTROUCTION TO JAVASCRIPT (https://cs.lmu.edu/~ray/notes/javascript/)
function cylinder(spec){
 let { radius, height } = spec;
 const surfaceArea = () => (2* Math.PI * radius * radius) + (2 * Math.PI * radius * height)
 const volume  = () => Math.PI * radius * radius * height
 const stretch = (factor) => { height *= factor; }
 const widen = (factor) => { radius *= factor; }

 const toString = () => `Cylinder with radius ${radius} and height ${height}`
 return Object.freeze({volume, surfaceArea, get radius() {return radius;}, get height() {return height; }, toString, stretch, widen}, )
}

function makeCryptoFunctions(key, alg){
  const crypto = 
}



module.exports = {
    change,
    stripQuotes,
    scramble,
    powers,
    powersGenerator,
    interleave,
    cylinder,
}
