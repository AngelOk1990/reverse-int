module.exports = function reverse (n) {
  let str = "" + Math.abs(n);
  let result = "";
for (let i = 0; i < str.length; i++) {
    //if (result[1] === 0) {
      //  result = `${str[i]}${result.substring(1)}`;
    //} else if ((result[1] === 0) & (result[2] === 0)) {
   //     result = `${str[i]}${result.substring(2)}`
   // } else {
        result = `${str[i]}${result}`
    }
    return result;
  }
//}