// star perttren
// square star perttren

// string="";

// for(i=0; i<=5; i++){
//     string+='*'
//     for(j=0; j<=5; i++){
//         string+='*'
//         // string+=`i*j`
//         // string+=`\t`
//     }
//     string+=`\n`
// }
// console.log(string)




//   string = "";

// for(  i = 0; i < 5; i++) { // external loop
//   for(  j = 0; j < 5; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);



// string = '';

// for (i=0; 1<5; i++){ 
//   for (j=0; 1<5; i++){
//     if(i===0 || j=== 5-1){
//         string += '*';
//     }
//     else{
//         if(j===0 || j===5-1){
//             string += "*";
//         }
//     }
//     else{
//         string += "";
//     }
//   }
//   string += `\n`;
// }

// console.log(string)





//   n = 5; // row or column count
// // defining an empty string
//   string = "";

// for(  i = 0; i < n; i++) { // external loop
//   for(  j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);





//holow square star pattern
// string='';

// for(i=0; i<5; i++){
//    for(j=0; j<5; j++){
//     if(i===0 || j===5-1){
//         string += '*';
//     }
//     else{
//         if(j===0 || i===5-1){
//             string += '*';
//         }
//         else{
//             string += ' ';
//         }
//     }
//    }
//    string += '\n';
// }
// console.log(string)





// string = '';

// for(i=1; i<=10; i++){
//     for(j=0; j<i; j++){
//         string += '*';
       
//     }
//     string += '\n';
  
// }
// console.log(string)






// n = 5;
// string = "";

// for(i=0; i<n; i++){
//     for(j=0; j<n; j++){
//         string += "*";
       
//     }
//     string += "\n";
// }
// console.log(string)





// n = 5;
// string = "";

// for(row=0; row<n; row++){
//     for(col=0; col<n; col++){
//         string += "*";
//     }
//     string += "\n";
// }

// console.log(string)



// n = 5;
// string = "";

// for(row=0; row<n; row++){
//     for(col=0; col<n; col++){
//         if(row==0 || row==n-1){
//           string += "*";  
//         }
//         else{
//             if(col==0 || col==n-1){
//                 string += "*";
//             }
//             else{
//                 string += " ";
//             }
//         }
//     }
//     string += "\n";
// }

// console.log(string)



// Downward Triangle Star Pattern

// n = 5;
// string = "";

// for(i=0; i<=n; i++){
//     for(j=0; j<n; j++){
//         string += "";
        
//     }
//     for(k=0; k<n-i; k++){
//         string += "*"
//     }
//     string += "\n";
// }
// console.log(string)






// Right Triangle Pattern in Javascript

// n = 5;
// string = "";

// for(i=0; i<=n; i++){
//     for(j=0; j<n-i; j++){
//         string += "";
        
//     }
//     for(k=0; k<i; k++){
//         string += "*"
//     }
//     string += "\n";
// }
// console.log(string)






// Left Triangle Pattern in Javascript

// n = 10;
// string = "";

// for(i=0; i<=n; i++){
//     for(j=0; j<i; j++){
//         string += "*"
//     }
//     // for(k=0; k<n; k++){
//     //     string += "*"
//     // }
//     string += "\n"
// }
// console.log(string) 


//try to print O


// string = "";

// for(i=0; i<=10;  i++){
//     for(j=0; j<=20; j++){
//         if(i==0 || i==1 || j==0|| j==1 || i==9 || i==10 || j==19 || j==20){
//             string += "*"
//         }
//         else{
//             string += " "
//         }
        
//     }
//     string += "\n"
// }

// console.log(string)




// num = 5;
// string = ""

// for(i=0; i<=num; i++){
//     for(j=0; j<=i; j++){
//         string += "*"
//     }
//     string += "\n"
// }

// console.log(string)

string = ""

for(i=0; i<4; i++){
    for(j=0; j<6; j++){
        if(j==0 || j==5){
            string += "*"
        }
        else{
            if(j==0 || j==i+1){
                string += "*"
            }
            else{
                string += " "
            }
        }
    }
    string += "\n"
}
console.log(string)