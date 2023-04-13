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

// const funA = (a,b) =>{
//     console.log('this is function A',a+b)
// }

// const funB = ()=>{
//     setTimeout(function(){
//     console.log('this is function B')
// },3000)
// }

// const func = () =>{
//     setTimeout(function(){
//         console.log('this is function c')
//     },6000)
// }

// funA(4,6);
// funB();
// func();








// // update on 04-04-23


// let stocks={
//     fruits:["strawberry","grapes","banana","apple"],
//     liquid:["water","ice"],
//     holder:["cone","cup","stick"],
//     topping:["chocolate","peanuts" ],
// }

// function order(fruit_name,liquid_name,holder_name, topping_name, call_production) {
//     console.log(`place an order`)
//     setTimeout(function() {
//         console.log(`${stocks.fruits[fruit_name]} was selected`)

//         setTimeout(function() {
//             console.log(`${stocks.liquid[liquid_name]} was selected`)

//             setTimeout(function() {
//                 console.log(`start the Machine`)

//             setTimeout(function() {
//                 console.log(`${stocks.holder[holder_name]} was selected`)

//                 setTimeout(function() {
//                     console.log(`${stocks.topping[topping_name]} was selected`)

//                     call_production()

//                 }, 3000)

//             }, 1000)

//         }, 1000)

//       }, 1000)

//     }, 2000)
  

// }

// function production() {
     
//         setTimeout(function() {
//             console.log("The ice cream has been produced and is ready for pickup.")
//         }, 3000)
     
// }
 
// order(0,1,0,0, production);
  



  


// function production() {
//     console.log("production has started")
//        setTimeout(()=> {
//            console.log(`the fruits has been chopped`)
//            setTimeout(()=> {
//                console.log(`${stocks.fruits[fruit_name]} and ${stocks.liquid[liquid_name]} added`)
//                setTimeout(()=> {
//                    console.log(`Start the Machine`)
//                    setTimeout(()=> {
//                        console.log(`ice Cream`)
                       
//                    }, 3000)

//                }, 3000)
//            }, 3000)
//        }, 3000)
    
// }










// let stocks={
//     fruits:["strawberry","grapes","banana","apple"],
//     liquid:["water","ice"],
//     holder:["cone","cup","stick"],
//     topping:["chocolate","peanuts" ],
// }

// function order(fruit_name,liquid_name,holder_name, topping_name, call_production) {
//     console.log(`place an order`)
//     setTimeout(function() {
//         console.log(`${stocks.fruits[fruit_name]} was selected`)

//         setTimeout(function() {
//             console.log(`${stocks.liquid[liquid_name]} was selected`)

//             setTimeout(function() {
//                 console.log(`start the Machine`)

//             setTimeout(function() {
//                 console.log(`${stocks.holder[holder_name]} was selected`)

//                 setTimeout(function() {
//                     console.log(`${stocks.topping[topping_name]} was selected`)

//                     call_production()

//                 }, 3000)

//             }, 1000)

//         }, 1000)

//       }, 1000)

//     }, 2000)
  

// }

// function production() {
     
//         setTimeout(function() {
//             console.log("The ice cream has been produced and is ready for pickup.")
//         }, 3000)
     
// }
 
// order(0,1,0,0, production);



// let stocks={
//         fruits:["strawberry","grapes","banana","apple"],
//         liquid:["water","ice"],
//         holder:["cone","cup","stick"],
//         topping:["chocolate","peanuts" ],
//     }
    

//     let order=(fruit_name,call_production)=>{

//     }







// let stocks={
//     fruits:["strawberry","grapes","banana","apple"],
//     liquid:["water","ice"],
//     holder:["cone","cup","stick"],
//     topping:["chocolate","peanuts" ],
// }

// function order(fruit_name, call_production) {
//     console.log(`Place an order`)
//     setTimeout(function() {
//         console.log(`${stocks.fruits[fruit_name]} was selected`)

//         setTimeout(function() {
//             console.log(`${stocks.liquid[1]} was selected`)

//             setTimeout(function() {
//                 console.log(`Start the Machine`)

//             setTimeout(function() {
//                 console.log(`${stocks.holder[1]} was selected`)

//                 setTimeout(function() {
//                     console.log(`${stocks.topping[1]} was selected`)

//                     call_production()
//                 }, 3000)

//             }, 1000)

//         }, 1000)

//         }, 1000)

//     }, 2000)
  

// }

// function production() {
//      console.log("production has started")
//         setTimeout(()=> {
//             console.log(`the fruits has been chopped`)
//             setTimeout(()=> {
//                 console.log(`${stocks.fruits[0]} and ${stocks.liquid[1]} added`)
//                 setTimeout(()=> {
//                     console.log(`Start the Machine`)
//                     setTimeout(()=> {
//                         console.log(`ice Cream placed on ${stocks.holder[1]}`)
                        
//                         setTimeout(()=> {
//                             console.log(`topping on ice Cream ${stocks.topping[1]}`)
                            
//                             setTimeout(()=> {
//                                 console.log( `Serve Ice Cream`)
                                
//                             }, 2000)
//                         }, 3000)
//                     }, 2000)

//                 }, 1000)
//             }, 1000)
//         }, 2000)
     
// }
 
// order(0, production)































// function getUser() {
//     return new Promise((resolve, reject) => {
//       Users = []; // fix the name of the array
//       setTimeout(() => {
//         Users = [
//           { userName: 'john', email: 'john@g.com' },
//           { userName: 'jane', email: 'jane@g.com' }
//         ];
//         resolve(Users);
//       }, 2000);
//     });
//   }

  
//   getUser().then((Users) => {
//     console.log(Users);
//   });
  
//   getUser().then((Users, username = 'john') => {  
//     const User = Users.find((user) => user.userName === username);  
//     console.log(User);
//   });











// let stocks={
//     fruits:["strawberry","grapes","banana","apple"],
//     liquid:["water","ice"],
//     holder:["cone","cup","stick"],
//     topping:["chocolate","peanuts" ],
// }


// let order=(time,work)=>{

//     return new Promise ((resolve,reject) => {
//         setTimeout(()=>{
//             resolve(work())
//         },time)
//     })
// }
// order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))
// .then((value)=>{ console.log(value)
//     return order(2000,()=>console.log(`prodution has started`))
// })
// .then(()=>{
//     order(2000,()=>console.log(`fruits has been chopped`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`Start the Machine`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`ice Cream placed on ${stocks.holder[1]}`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`topping on ice Cream ${stocks.topping[1]}`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`Serve Ice Cream`))
// })




// .catch((error)=>{
//     console.log('customer left')
// })
// .finally(()=>{
//     console.log(' end of day')

// })

















let stocks={
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    topping:["chocolate","peanuts" ],
}


let order=(time,work)=>{
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve(work())
        },time)
       
    })
    
}

order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))
.then(()=>{ 
    order(2000,()=>console.log(`prodution has started`))
})




.then(()=>{
    order(2000,()=>console.log(`fruits has been chopped`))
})
.then(()=>{
    order(2000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})
.then(()=>{
     order(2000,()=>console.log(`Start the Machine`))
})
.then(()=>{
     order(2000,()=>console.log(`ice Cream placed on ${stocks.holder[1]}`))
})
.then(()=>{
    order(2000,()=>console.log(`topping on ice Cream ${stocks.topping[1]}`))
})
.then(()=>{
    order(2000,()=>console.log(`Serve Ice Cream`))

})












