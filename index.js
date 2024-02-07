function slice(data, start, end) {
  if (!Array.isArray(data) || arguments.length === 0) {
      return "Invalid data";
  }

  start = start || 0;
  end = end === undefined ? data.length : end;

  if (start < 0) {
      start = Math.max(data.length + start, 0);
  }
  if (end < 0) {
      end = Math.max(data.length + end, 0);
  }
  start = Math.min(Math.max(start, 0), data.length);
  end = Math.min(Math.max(end, 0), data.length);
  var result = [];
  var i = start;

  while (i < end && i < data.length) {
      result.push(data[i]);
      i++;
  }

  return result;
}


console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 20)); //[]
console.log(slice()); //Invalid data

module.exports = slice;
