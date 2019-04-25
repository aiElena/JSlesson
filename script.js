

let maths ={
    pi: 3.14,
    logarithm: 2.71,
    goldenRatio: 1.61,
    feigenbaum: 2.5,
    simpleTwins: 0.66,
    sum:function (x, y) {
        rez = x + y;
        document.write(rez);
        return(rez);
    },
    multiply:function (x, y) {
        rez = x * y;
        document.write(rez);
        return(rez);
    },
    del:function (x, y) {
        rez = x / y;
        document.write(rez);
        return(rez);
    },
    subtraction:function (x, y) {
        rez = x % y;
        document.write(rez);
        return(rez);
    },
    root:function (x) {
        rez = x * x;
        document.write(rez);
        return(rez);
    }
};

maths.sum(5, 6);
maths.multiply(8, 6);
maths.del(9, 6);
maths.subtraction(7, 6);
maths.root(5);

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.toString());
console.log(arr.slice(2, 4));
console.log(arr.splice(0, 2));








