function greet(name){
    console.log("Hello "+name);//here we are using addition to concatenate the name with hello
    console.log(`Hello ${name} `);    //here we are using backtick to concatenate the name with hello
}
greet("Om");//passing name in the function


const factorial=function(n)
    {
    if(n==1 || n==0){
        return 1;
    }
    else
    {
    return n*factorial(n-1);
    }
}
console.log(factorial(5));

