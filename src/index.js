
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length == false) {
      console.log([]);
     return [];
    }
  const flaten = [];
    console.log(matrix);
    console.log(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
    console.log(matrix[i].length);
    if (i%2 == 0) {
       for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
      flaten.push(matrix[i][j]);
    }   
    } else {
             for (let k = matrix[i].length - 1; k >= 0; k--) {
      console.log(matrix[i][k]);
      flaten.push(matrix[i][k]);
    }
    }

  }
  
  console.log(flaten);

  return flaten;
}