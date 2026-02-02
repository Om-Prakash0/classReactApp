//here we using the loop
// for → Counting loops (arrays, indexes)

// while → Condition-based loops

// do-while → Execute once, then check condition




//for loop
console.log("for loop");
for(i=0;i<10;i++){
    console.log(2*i);
}
i=10;



//for the condition when we implement the odd loop we use while and do while loop
//while loop  
console.log("while loop");
while(i>0){
    console.log(2*i);
    i--;
}


//do while loop
console.log("do while loop");
i=10
do{
    console.log(3*i);
    i--;
}
while(i>0);

//using forEach 
console.log("Using forEach");
let a=[1,2,3,4,5];
a.forEach((item)=>console.log(item));

//FOR OF loop
const fruits=["Apple","Banana","Litchi"];
for(const fruit of fruits){
    console.log(fruit);
}

//for IN loop
let arr=[1,2,3,4,5,6,7,8];
for(const item in arr){
    console.log(item,arr[item]);
}

let str=["Ram","Om","Shyam","Nitin"];
for(const item in str){
    console.log(item,str[item]);
}