// HOMEWORK 1, SEBASTIAN GRASSO

function change(cents) {
  if (cents < 0) {
    throw new RangeError('RangeError: amount cannot be negative');
  }

  let remaining = cents;

  const quarters = Math.floor(cents / 25);
  remaining %= 25;
  const dimes = Math.floor(remaining / 10);
  remaining %= 10;
  const nickels = Math.floor(remaining / 5);
  remaining %= 5;
  const pennies = remaining;

  return [quarters, dimes, nickels, pennies];
}

function stripQuotes(string) {
  return string.replace(/['"]+/g, '');
}

function scramble(s) {
  const seperate = s.split('');
  const letters = seperate.length - 1;
  for (let i = letters; i > 0; i -= 1) {
    const temp = seperate[i];
    const randSpot = Math.floor(Math.random() * (i + 1));
    seperate[i] = seperate[randSpot];
    seperate[randSpot] = temp;
  }
  return seperate.join('');
}

function powers(base, limit, callback) {
  let exp = 0;
  while (base ** exp <= limit) {
    callback(base ** exp);
    exp += 1;
  }
}

// credit DR TOALS INTROUCTION TO JAVASCRIPT (https://cs.lmu.edu/~ray/notes/javascript/)
function* powersGenerator(base, limit) {
  let value = 1;
  while (value <= limit) {
    yield value;
    value *= base;
  }
}

function say(word) {
  return nextWord(word);
//   if (word === undefined){
//     return ''
//   }
//   else {
//     const nextWord = undefined;
//       if (!nextWord) {
//         nextWord = word;
//       }
//       else{
//     }
//
// function
//   }
}

function interleave(arr, ...values) {
  const weave = [];

  for (let a = 0; a < Math.max(arr.length, values.length); a += 1) {
    if (a < arr.length) { weave.push(arr[a]); }
    if (a < values.length) { weave.push(values[a]); }
  }
  return weave;
}
// credit DR TOALS INTROUCTION TO JAVASCRIPT (https://cs.lmu.edu/~ray/notes/javascript/)
function cylinder(spec) {
  let { radius = 1, height = 1 } = spec;

  const surfaceArea = () => (2 * Math.PI * radius * radius) + (2 * Math.PI * radius * height);
  const volume = () => Math.PI * radius * radius * height;
  const stretch = (factor) => { height *= factor; };
  const widen = (factor) => { radius *= factor; };

  const toString = () => `Cylinder with radius ${radius} and height ${height}`;
  return Object.freeze({
    volume,
    surfaceArea,
    get radius() { return radius; },
    get height() { return height; },
    toString,
    stretch,
    widen,
  });
}

function makeCryptoFunctions(key, algo) {
  const crypto = require('crypto');

  function encrypt(str) {
    const alpha = crypto.createCipher(algo, key);
    const encoded = alpha.update(str, 'utf8', 'hex') + alpha.final('hex');
    return encoded;
  }

  function decrypt(str) {
    const alpha = crypto.createDecipher(algo, key);
    const decoded = alpha.update(str, 'hex', 'utf8') + alpha.final('utf8');
    return decoded;
  }

  return [encrypt, decrypt];
}

function randomName({ region, gender }) {
  const prom = require('request-promise');
  const query = {
    uri: 'https://uinames.com/api/',
    qs: {
      gender,
      region,
    },
    json: true,
  };
  return prom(query).then((body) => `${body.name}, ${body.surname}`);
}

module.exports = {
  change,
  stripQuotes,
  scramble,
  powers,
  say,
  powersGenerator,
  interleave,
  cylinder,
  makeCryptoFunctions,
  randomName,
};
