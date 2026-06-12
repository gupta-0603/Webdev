let a=prompt("enter first number")
let b=prompt("enter second number")
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}
let sum=parseInt(a)+parseInt(b)
console.log("the sum is",sum)
try{
    console.log("the sum is",sum*x)
} catch(error){
    console.log("eroor hai")
}
finally {
    console.log("files are being closed and db connection is being closed")
}
//if you want to run the code after return statement then use the finally
