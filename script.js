

let maths ={
    pi: 3.14,
    logarithm: 2.71,
    goldenRatio: 1.61,
    feigenbaum: 2.5,
    simpleTwins: 0.66,
    sum:function (x, y) {
        rez =x + ' + ' + y +' = ' + (x + y) + '<br>';
        /*document.write(rez);*/
        return(rez);
    },
    multiply:function (x, y) {
        rez =x + ' * ' + y +' = ' + (x * y) + '<br>';
        /*document.write(rez);*/
        return(rez);
    },
    del:function (x, y) {
        rez =x + ' : ' + y +' = ' + ( x / y) + '<br>';
        /*document.write(rez);*/
        return(rez);
    },
    subtraction:function (x, y) {
        rez ='остаток от деления ' + x +' на ' + y +' = ' +  (x % y) + '<br>';
        /*document.write(rez);*/
        return(rez);
    },
    root:function (x) {
        rez ='квадрат числа ' + x + ' = ' + (x * x) + '<br>';
        /*document.write(rez);*/
        return(rez);
    }
};

document.getElementById("out_num1").innerHTML=maths.sum(5, 6);
document.getElementById("out_num2").innerHTML=maths.multiply(8, 6);
document.getElementById("out_num3").innerHTML=maths.del(9, 6);
document.getElementById("out_num4").innerHTML=maths.subtraction(7, 6);
document.getElementById("out_num5").innerHTML=maths.root(8);


let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.toString());
console.log(arr.slice(2, 4));
console.log(arr.splice(0, 2));




