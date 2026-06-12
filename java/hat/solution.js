let students=["shubh","ram","shyam","ravichnadra","ashwin","deepak","rajatdalal"]
let houses=[]
for (const student of students) {
    if(student.length<6){
        houses.push("gryfindor")
    }
    else if(student.length<8){
        houses.push("hupplepuff")
    }
    else if(student.length<12){
        houses.push("ravenclaw")
    }
    else{
        houses.push("slytherin")
    }
    
}
console.log(houses)