//printing the even and odd  number;

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log("Even Number");
a.forEach((item) => {
    if (item % 2 === 0) {
        console.log(item);
    }
});


console.log("Odd Number");
a.forEach((item) => {
    if (item % 2 !== 0) {
        console.log(item);
    }
});

