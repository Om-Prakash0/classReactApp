const str="javascript";
let vowelCount=0;
for(const letter of str){
    if( letter==="a" || letter==="e"|| letter==="i" || letter==="o" || letter==="u" ){
        vowelCount++;
    }
}
console.log(vowelCount);