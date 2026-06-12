 async function getData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3500);
    })

}
//post request for server
async function getData() {
    let x=fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await (await x).json()
    console.log(data)
    return 455
    //   .then(response => response.json())
    //   .then(json => console.log(json))')
    
}
async function main() { 
console.log("loading modules")
console.log("do something else")
console.log("load data")
let data=await getData()
console.log(data )
console.log("process data")
} 
main ()