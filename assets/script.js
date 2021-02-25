var passwordEl = document.getElementById ('password');
var lengthEl = document.getElementById ('length');
var uppercaseEl = document.getElementById ('uppercase');
var lowercaseEl = document.getElementById ('lowercase');
var numbersEl = document.getElementById ('numbers');
var symbolsEl = document.getElementById ('symbols');
var generateEl = document.getElementById ('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number:getRandomNumber,
  symbol:getRandomSymbol
};

generateEl.addEventListener('click',(function () {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;

  passwordEl.innerText = generatePassword (
    hasLower, hasUpper, hasNumber, hasSymbol, length
  );

}));

function generatePassword (lower, upper, number, symbol, length) {
  let generatedPassword = '';
  var typesCount = lower + upper + number +symbol;

  var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (item => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return '';
  }

  for (let i =0; i < length; i += typesCount) {
    typesArr.forEach( function (type) {
        var funcName = Object.keys(type)[0];

        generatedPassword += randomFunc[funcName]();
      });
  }

  var finalPasswword = generatedPassword.slice(0, length);

  return finalPasswword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
 var symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
