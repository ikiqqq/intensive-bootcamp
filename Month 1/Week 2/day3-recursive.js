// function countdown(angka) {
//     console.log(angka);
//     if (angka > 0) {
//       countdown(angka - 1);
//     } else {
//       return;
//     }
//   }
//   countdown(10);

//
  
//   function factorialLoop(angka) {
//     let result = 1;
//     for (let i = 1; i <= angka; i++) {
//       result *= i;
//     }
//     return result;
//   }
//   console.log(factorialLoop(5));
  
//   function factorialRecursive(angka) {
//     if (angka == 1) {
//       return 1;
//     } else {
//       return angka * factorialRecursive(angka - 1);
//     }
//   }
//   console.log(factorialRecursive(5));

//
function computeFactorial(num) {
  let results = 1;

  for (let i = 2; i <= num; i++) {
    results = results * i;
  }

  return results;
}

console.log(computeFactorial(5));


//
function calculateFactorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

console.log(calculateFactorial(5));
  





  //sort integer

// const numbers = [2,4,5,7,4,6]
//     numbers.sort(function(a,b){
//         return b-a
//      });
    
//      return(numbers);


//sort alphabet
    //  function myFunction(numbers) {
    //     numbers.sort(function(a,b){
    //        if(a > b) {
    //            return 1;
    //        }
    //        if (a < b){
    //            return -1
    //        }
    //     return 0;
    //  });
    //  return numbers;

    // };

    // console.log("a","d","r","t","f","w");

    // //average
    // arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // function average(array) {
    //     var total = 0;
    //     var count = arry.length;

    //     array.forEach(function(e,i) { 
    //         total += e;
            
    //     });
    
    //     return total / count;
    // }
    
    // console.log(average(arry));
