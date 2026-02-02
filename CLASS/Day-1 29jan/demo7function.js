//function:-> block of code or instruction which can be used number of times without declaration again and again;


//function declaration
function greet(){
    console.log("Hello World");
}
greet(); //function call


function add(a,b){
    console.log(a+b);
}

//argument calling
add(a=13,b=10);
add(5,9)


function add1(a,b){
    return a+b;
}
console.log(add1(2,4));

let c=add1(2,4);
console.log(c);

