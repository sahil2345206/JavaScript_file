// // // // 


// // // class user{
// // //   constructor(email,password){
// // //     this.email = email;
// // //     this.password = password;
// // //   }
// // //   validateEmail(){
// // //     const emailRegexp = /(.)(@)/
// // //     if(!emailRegexp.test(this.email)){
// // //       console.log(`${this.email} is not valid email adress`)
// // //     } else{
// // //       console.log(`${this.email} is valid email adress`)
// // //     }
// // //   }
// // // }

// // // sahil = new user('sahil@gmail.com')
// // // sahil.validateEmail()


// // // 


// // class user{
// //   constructor(email,password){
// //     this.email = email;
// //     this.password = password;
// //   }
// //   validateEmail(){
// //     const emailRegexp = /(.)(@)/
// //     if(!this.email.match(emailRegexp)){
// //       console.log(`${this.email} is not valid email adress`)
// //     } else{
// //       console.log(`${this.email} is valid email adress`)
// //     }
// //   }
// // }

// // sahil = new user('sahil@gmail.com')
// // sahil.validateEmail()




const prompt = require('prompt');

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  validateEmail() {
    const emailRegexp =/^\S+@\S+\.\S+$/
    ;
    if (!this.email.match(emailRegexp)) {
      console.log(`${this.email} is not a valid email address`);
    } else {
      console.log(`${this.email} is a valid email address`);
    }
  }
  validatePassword() {
    const passwordRegexp =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    ;
    if (!this.password.match(passwordRegexp)){
      console.log(`${this.password} is not a valid password`);
    } else {
      console.log(`${this.password} is a valid password`);
    }
  }
}
prompt.start();
prompt.get(['email', 'password'], function (err, result) {
  if (err) { return onErr(err); }
  const user = new User(result.email, result.password);
  user.validateEmail();
  user.validatePassword();
});
function onErr(err) {
  console.log(err);
  return 1;
}

