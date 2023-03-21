// function outer(){
//     function inner(){
//         console.log('bla bla')
    
//     }
//      inner()
// }
// x = outer()
// console.log(x.inner())





// function greet(){
//     console.log('good morning')
// }
// function sayhello(){
//     console.log('say hello')
// }
// function add(num1 , num2, callback){
//     console.log(num1+num2)
//     callback()
// }

// add(10,15,sayhello);
// add(10,15,greet);


// const add =(()=>{
//     //code
//  })


// function add(a,b){

//     console.log(a+b)
  
// }
// sayhello= ()=>{
// }

// add(10,15,sayhello)
// sayhello()

const funA = (a,b) =>{
    console.log('this is function A',a+b)
}

const funB = ()=>{
    setTimeout(function(){
    console.log('this is function B')
},3000)
}

const func = () =>{
    setTimeout(function(){
        console.log('this is function c')
    },6000)
}

funA(4,6);
funB();
func();