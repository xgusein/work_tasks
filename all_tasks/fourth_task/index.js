// let arr = [45,89,78,23, -12,10,32,6];

// function sortArray(array) {
//     for(let i = 0;i < array.length; i++) {
//         for(let j =  i + 1; j < array.length; j++ ){
//             if(array[i] > array[j]){
//                 temp = array[i];
//                 array[i]=array[j];
//                 array[j] =temp;
//             }
//         }
//     }
//     return array;
// }

// console.log(sortArray(arr))

// let arr = [45,89,78,23, -12,10,32,6];

// arr.sort(function(a,b) {
//     return a %2 - b%1;
// });

// console.log(arr);



const numbersForTest = [5, 2, 3, 1, 6, 9, 12];

const sortOddNumbers = (numbers) => {
    const oddNumbers = numbers.filter(number => number % 2).sort((a,b) => a - b);
    // const sortOdds = oddNumbers.sort((a,b) => a - b);
    return numbers.map(number => number % 2 ? oddNumbers.shift() : number);
};

console.log('Before: ', numbersForTest);
console.log('After: ', sortOddNumbers(numbersForTest));