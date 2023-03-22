// synchronous example

// const fun2 = () =>{
//     console.log('function2 is start')
// }
// const fun1 = () =>{
//     console.log('function1 is start')
//     fun2()
//     console.log('function1 is end')
// }

// fun1()



const fun2 = () =>{
    setTimeout(() => {
        console.log('function2 is start')
    },3000)
}
const fun1 = () =>{
    console.log('function1 is start')
    fun2()
    console.log('function1 is end')
}

fun1()