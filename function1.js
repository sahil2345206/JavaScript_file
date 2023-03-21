// function func1(x,y){
//     z = 9
//     sum = x + y +z
//     console.log('hi iam function',sum)
    
// }

// func1(6,9)


// multiplication

// function multiplication(x,y){
//     num = x * y
//     console.log("multiplication value", num)
// }

// multiplication(5,5);



// division 

// function division(x, y){
//     num = x / y
//     console.log("quotient", num)
// }

// division(50,5)


//to check an array or object

// function dataType(data){
    
//     if(Array.isArray(data)){
//         console.log("this is an array")
//     }
//      else  {
//          if (typeof data==="object" && data !== null) 
//          console.log("this is an object")

//         else{
//              console.log("this is not an object or array")
//          }
//      }
// }

// dataType([123, 'sahil']);

// dataType({firstName:'sahil', lastName:'dhiman'});

// dataType(123, 'sahil');

function printElement(arr,obj){
    if (typeof(arr)=='object'){
        for(i=0;i<arr.length;i++){
            console.log('array element',arr[i])
        }
    }else{
        for(key in obj){
            console.log('obj element',key,obj[key])
        }
    }
}
person = {firstName:'Sahil', lastName: 'Dhiman', Age:'25', eyecolor:'brown'}
printElement('not an array',person)












