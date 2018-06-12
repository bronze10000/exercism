
reverseString = function (input) {
// 
// var data = input;
// place data into a string array
var dataArr = input.split('');
// reverse index of string array
dataArr.reverse();
// reconstitute the string array into a string
// input = dataArr.join('');
return dataArr.join('');

    // return input;
};

module.exports = reverseString;