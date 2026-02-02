const student = {name:"Ram",age:21,hobby:"Cricket"};
for(const key in student){
    console.log(student.key);
}

const student1 = {name:"Ram",age:21,hobby:"Cricket"};
for(const key in student1){
    console.log(key,student1[key]);
}


const student2 = {name:"Ram",age:21,hobby:"Cricket"};
for(const key in student2){
    console.log(student2[key]);
}