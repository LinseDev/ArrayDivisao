const array = [1 ,50 ,980 ,1000, 19999]
const sum = array.reduce ((acc , curr), acc + curr ,0);
const average = sum / array.length
console.log(average);