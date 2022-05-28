const add = function(x, y) {
	return(x +y);
};

const subtract = function(x, y) {
	return(x-y);
};

const sum = function([...x]) {
	if (x.length == 0) return 0;
  y = 0;
  for (i=0; i < x.length; i++){
    y += x[i];
  }
  return y;
};

const multiply = function([...x]) {
  if (x.length == 0) return 0;
  y = 1;
  for (i = 0; i < x.length; i++){
    y *= x[i];
  }
  return y;
};

const power = function(x, y) {
  let pow = 1;
	for (i = 0; i < y; i++){
    pow *= x;
  }
  return pow;
};

const factorial = function(x) {
  if(x == 0) return 1;
  if(x == 1) return 1;

  let fact = 1;
	for (i = x; i > 0; i--){
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
