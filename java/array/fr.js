let arr=[1,3,5,7,11,13];
let newarr=[]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2)
    
}
console.log(newarr)
const greaterThanSeven=(e)=>{
      if(e>7){
        return true
      }
      return false
}
console.log(arr.filter(greaterThanSeven))
//same like factorial of number
let arrd=[1,2,3,4,5]
const red=(a,b)=>{
    return a*b
}
console.log(arrd.reduce(red))