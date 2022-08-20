// Sample Array
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a[3] = "Punith";
var year = [2000, 2002, 1990, 2012, 2020, 2022, 2015, 2013, 2019];

function age1(year) {
  var b = [];
  var curyear = 2022;
  for (let i = 0; i < year.length; i++) {
    b[i] = curyear - year[i];
  }
  return b;
}
var c = age1(year);

var d = [10, 11, 12, c];

//Array Methods
// Adding  element to the end of array
// push method returns length of the array after adding element
a.push(0);
// Removing element fro the end of the array
// pop method returns removed element
a.pop();

// Adding element to begining of array
a.unshift(0);
// Removing elemet from starting position
a.shift();

// indexOf method returns index of element of array if item is present else returns -1 
a.indexOf(3);
//includes method returns true if item is present else false
a.includes(4);

if(a.includes(5)){
    let numberString='Five';
};
//Objects 
//in arrays we can access items using indes or orders but in object we assign a key to every value 
 let obj={
   firstName:"punith",
   lastName:'H P",
   age:22,
   job:"Developer",
   hobbies:[1,2,3]
};
