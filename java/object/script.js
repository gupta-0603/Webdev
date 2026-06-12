let obj ={
    a:1,
    b:"harry"
}
console.log(obj)
let animal={
    eats:true
};
let rabbit={
    jumps:true
};
rabbit.__proto__=animal;
class Animal {
      constructor(name){
        this.name=name
        console.log("object is created")
      }eats(){
        console.log("kha rha hoon")
      }
      jumps(){
        console.log("kud rha hoon")
      }
}
let a=new Animal("bunny");
console.log(a)