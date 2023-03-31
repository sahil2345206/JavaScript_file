// hollow prttn

// string="";

// for( i=0;i<10;i++){
//     for(j=0;j<10;j++){
//         if(i==0||i==1 || i==4|| i==5 ||j==0||j==1||j==2|| j==7||j==8 ||j==9)
//         string +='*';
//         else(
//             string +=" "
//         )
//     }
//     string +='\n'
// }
// console.log(string)




// string="";

// for( i=0;i<11;i++){
//     for(j=0;j<10;j++){
//         if(j==0|| j==1|| i==0||i==1|| i==5||i==6)
//         string +=' *';
//         else(
//             string +=" "
//         )
//     }
//     string +='\n'
// }
// console.log(string)



// string="*";
// for( i=0; i<20; i++){
//     for(S=0; S<10; S++)    
// }

// console.log(string)


// program to check if a number is prime or not

// // take input from the user
// const number =  7;
//   isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (  i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }

// string = ""
// for(i=0; i<=10; i++){
//     for(j=0; j<10; j++){
//         if(j==0 || j==1 || i==0 || i==1 || i==5 || i==6 || i==10 || i==11-1)
//         string += "*"
//     }
   
//     string += "\n"
// }
// console.log(string)


/*
// a alphabet
string = ""
for(i=0; i<=10; i++){
    for(j=0; j<15; j++){
        if(i==0|| i==1 ||i==5 || i==4 || j==0 || j==1|| j==13 || j==14){
            string += "*"
        }
        else{
            string += " "
        }
            
    }
    string += "\n"
}

console.log(string)

*/


//trying to print 7 number

string = ""
for(i=0; i<=10; i++){
    for(j=0; j<15; j++){
        if(i==0  || j==14){
            string += "*"
        }
        else{
            string += " "
        }
            
    }
    string += "\n"
}

console.log(string)

