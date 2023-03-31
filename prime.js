// num = 20;
// IsPrimeNumber = true;

// for(i=2; i < num; i++){
//     if(num % i == 0){
//         IsPrimeNumber = false; 
//     }
    
// }

// if(IsPrimeNumber == true){
//     console.log(`${num } 'is a prime Number`);
// }
// else{
//     console.log(`${num } 'is not a prime Number`)
// }


// num = 30;
// IsPrimeNumber = true;

// for(i=2; i<num; i++){
//     if(num % i ==0){
//         IsPrimeNumber = false;
//     }
// }

// if(IsPrimeNumber == true){
//     console.log(`${num} is a prime number`)
// }
// else{
//     console.log(`${num} is not a prime number`)
// }



// num = 3;
// IsPrimeNumber = true;

// for(i=2; i<num; i++){
//     if(num % i==0){
//         IsPrimeNumber == false;
//     }
// }

// if(IsPrimeNumber == true){
//     console.log(`${num} is a prime number`)
// }
// else{
//     console.log(`${num} is not a prime number`)
// }




// num = 23;
// IsPrimeNumber = true;

// for(i=2; i<num; i++){
//     if(num % i==0){
//         IsPrimeNumber == false;
//     }
// }

// if(IsPrimeNumber == true){
//     console.log(`${num} is a prime number`)
// }
// else{
//     console.log(
//  `${num} is not a prime number`)
    
// }




// num = 7; 
// IsPrimeNumber = true;

// for(i=2; i<num; i++){
//     if(num % i == 0){
//         IsPrimeNumber = false;
//     }
// }

// if(IsPrimeNumber == true){
//     console.log(`${num} is a prime number`)
// }

// else{
//     console.log(`${num} not a prime num`)
// }





// var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 197,10]

// numArray = numArray.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });

// console.log(numArray);



// num = [1,2,3,4,5,6,7,8,9,197,10]; 
// IsPrimeNumber = true;
// numArray = numArray.filter((number){
// for(i=2; i<num; i++){
//     if(num % i == 0){
//         IsPrimeNumber = false;
//     }
// }

// if(IsPrimeNumber == true){
//     console.log(`${num} is a prime number`)
// }

// else{
//     console.log(`${num} not a prime num`)
// }
// }

// const num = [1,2,3,4,5,6,7,8,9,10];

// num.forEach((number) => {
//     isPrimeNumber = true;
  
//   for(  i = 2; i < number; i++){
//     if(number % i == 0){
//       isPrimeNumber = false;
//       break;
//     }
//   }
  
//   if(isPrimeNumber){
//     console.log(`${number} is a prime number`);
//   }
//   else{
//     console.log(`${number} is not a prime number`);
//   }
// });



//   arr = [1,500,58,51,197,199,151,8,40,30];
//   primeArray = [];

// for (  num of arr) {
//       i;

//     for (i = 2; i < num; i++) {
//         if (num % i == 0) {
//             break;
//         }
//     }
   
//     if (i == num) {
//         primeArray.push(num);
//     }
// }

// console.log(primeArray);


  arr = [1, 500, 58, 51, 197, 199, 151, 8, 40, 30];
  primeArray = [];

for (  i = 0; i < arr.length; i++) {
    num = arr[i];
    isPrime = true;

  for (  j = 2; j < num; j++) {
    if (num % j == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime && num > 1) {
    primeArray.push(num);
  }
}

console.log(primeArray);
