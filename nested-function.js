// function outerFn(){
//   return 'str'
// }

// console.log(outerFn())
// y = outerFn()

// z = 4 +y
// console.log(z)

// function outerFn(fname){
    
//     function innerFn(){
//         console.log(` i am inner function ${fname}`)
//     }
//     return innerFn
//   }

// console.log(outerFn())
// z = outerFn('sahil')
// console.log(z())



// function outerFn(name){
//     function innerFn(){
//         console.log('hello'+" "+name)
//     }
//     innerFn();
// }
// outerFn('sahil');








//   function std_name(name){
//     sahil = 'sahil'
//     mohit = 'mohit'
    

//     if(name=== 'sahil'){
//        student = 'sahil'}
//        else if(name === 'mohit'){
//        student = 'mohit'}

//        function std_marks(){
//         sahil = 85
        
//         mohit = 75
        

//     if(name === 'sahil'){
//        marks = '85'}
//        else if(name === mohit){
//        marks = '75'}
       
//        return marks;
//        }
//        student_marks = std_marks();
//        return [student  , marks]
//   }

//   sahil_info = std_name('sahil')
//   mohit_info = std_name('mohit')
  
//  console.log(sahil_info)










// function student(name, marks) {
//    total_marks = 0;

//   function calculate_total_marks() {
//     for ( i = 0; i < marks.length; i++) {
//       total_marks += marks[i];
//     }
//   }
//   calculate_total_marks();
//   return [name, marks, total_marks];
// }

//  sahil_marks = [45, 44, 38, 42];
//  sahil_info = student('sahil', sahil_marks);
// console.log(sahil_info);


function outer(){
  console.log('i am outer function')
  function inner(){
    console.log('i am inner function')
  }
  return inner
}

y = outer()
console.log(y())
