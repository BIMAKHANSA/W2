function targetTerdekat(arr) {
  var jarak = arr.length;
  var oIndex = -1; // Initialize oIndex as -1 to indicate it's not found
  var xIndex = [];

  // Loop through the array to find the index of 'o' and 'x'
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 'o') {
          oIndex = i; // Update oIndex to the current index 'i' where 'o' is found
      } else if (arr[i] === 'x') {
          xIndex.push(i);
      }
  }

  // If there are no 'x' characters in the array, return 0
  if (xIndex.length === 0) {
      return 0;
  }

  // Loop through each index of 'x' and calculate the distance from 'o'
  for (var j = 0; j < xIndex.length; j++) {
      var distance = Math.abs(xIndex[j] - oIndex);
      jarak = Math.min(jarak, distance);
  }

  return jarak;
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2

module.exports = targetTerdekat;
