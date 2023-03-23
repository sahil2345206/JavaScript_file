// // synchronous example

// const fun2 = () =>{
//     console.log('function2 is start')
// }
// const fun1 = () =>{
//     console.log('function1 is start')
//     fun2()
//     console.log('function1 is end')
// }

// fun1()



// // asynchronous example

// const fun2 = () =>{
//     setTimeout(() => {
//         console.log('function2 is start')
//     },3000)
// }
// const fun1 = () =>{
//     console.log('function1 is start')
//     fun2()
//     console.log('function1 is end')
// }

// fun1()




// let name1="sahil"

// console.log(`my name is  ${name1}`)

// function call_name(name){
//     console.log(`name call in function ${name}`)
// }

// call_name(name1)



let name1="sahil"

setTimeout(()=>{
    console.log(`my name is  ${name1}`)
},10)

function call_name(name){
    console.log(`name call in function ${name}`)
}

call_name(name1)

arr =[1,2,3,4,5]
for(i=1;i<100;i++){
    console.log(arr)
}

arr =[1,2,3,4,5]
for(i=1;i<100;i++){
    console.log(arr)
}



