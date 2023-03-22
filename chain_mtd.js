// class dog{
//     is=null
//     log(){
//         console.log(this)
//     }
//     bark(){
//         this.is="woffing"
//         this.log();
//         return this
//     }
//     walk(){
//         this.is="walking"
//         this.log()
//         return this
//     }
// }
 
// dog2=new dog()
// console.log(dog2.bark())
// console.log(dog2.bark().walk( ))

function createPerson(name , age){
   
const person = { 
    name : name,
    age : age,
    greeting : function(){
        console.log(`hello my name is ${this.name} and my age is ${this.age} `)
    }
}
return person;
}

const  person1= createPerson("sahil" , 25);
person1.greeting();