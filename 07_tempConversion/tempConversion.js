const ftoc = function(temp) {

  if (typeof(temp) !== "number"){
    return("ERROR");
  }

  return(Math.round(((temp - 32) * 0.5555) * 10) / 10)

};

const ctof = function(temp) {

  if (typeof(temp) !== "number"){
    return("ERROR");
  }

  return(Math.round(((temp * 1.8) + 32) * 10) / 10)

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};




/*

Check for number

Find conversion rates

Round to tenths 

*/