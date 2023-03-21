class dog{
    is=null
    log(){
        console.log(this)
    }
    bark(){
        this.is="woffing"
        this.log();
        return this
    }
    walk(){
        this.is="walking"
        this.log()
        return this
    }
}
 
dog2=new dog()
console.log(dog2.bark())
console.log(dog2.bark().walk( ))