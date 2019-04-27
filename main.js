function tb(x, y) {
    for (x = 0; x <= 10; x++) {
        document.write(x + '*' + (y) + '= ' + (x * y) + '<br>');
    }
}
tb(0, 3);

let tablMultiply ={
    tbl:function (x, y) {
        for (x = 0; x <= 10; x++) {
            rez = (x + '*' + (y) + '= ' + (x * y) + '<br>');
            return (rez);
            document.getElementById("out_num").innerHTML=rez;
        }
    }
};

document.getElementById("out_num").innerHTML=tablMultiply.tbl(0, 2);


/*let obj = {
    a: 100,
    user: 21,
    sum: function(){

    }
};*/

//1
//let x = 0;
//for(; x <= 50; x++ ){
// if(x % 2 == 0){
// console.log(x);
// }
//}


//2
/*let x = 0, sum = 0;
for(; x <= 50; x++ ){
 if(x % 2 !== 0){
 console.log(sum += (x));
 }
}
console.log(sum);
document.write(sum);

//3
let x = 100;
for(; x >= 0; x--){
    console.log(x);
}


//4
let x = 2;
let i = 10;
let rez;
rez = (x ** i);
console.log(rez);
 */

//5

/*let x = 15;
let y = 13;
let z = 12;
if (x > y && x > z && y > z) {
    console.log('x-это max');
} else {
    console.log('no');
}
*/

//let x = 10;
//let y = 11;
//let z = 12;
//if (x > y || x > z) {
//console.log('x-это max');ddd
//console.log('x-это max');ddd
//console.log('x-это max');
//console.log('x-это max');
//}else{
//console.log('no');
//}



//6
/*let a = 1;
let b = 5;
let sum = 0;
for(; a <= b; a++){
    sum = sum + a;
}
console.log(sum);
*/

//7
//let x = 10;
//for (; x <= 20; x++){
//   console.log ( x * x + '<br>');
//}



// 8
//let n = 3;
//let x = 1;
//let y = 0;
//for (; y < 4; y++) {
//x = (x + n);
// console.log(x);
//}

//вывод на страницу
//let out_num = document.getElementById('out_num');
//let p = ' ';

//for (let i=50; i>=0; i=i-10){
//  p = p + i + '<br>';
//out_num.innerHTML = p;
//}


//let i = 0;
//let n = 0;
//while (i < 10) {
//  i++;
//if (i == 3) {
//  continue;
//}
//n += i;
//console.log(n);

//8
//let n = 2;
//let x = 1;
//for (; x <= 13; x++) {
// x = (x + n);
//console.log(x);

//}

//9
//let x = -4;
//for (; x <= 100; x++) {
// if (x % 2 == 0) {
// console.log(x);
//}
//}


//10



/*

let x = '*';
let i = 1;
for (; i <= 4; i++) {
    document.write(x);

}
let out_num = document.getElementById('out_num');
out_num.innerHTML = (x);
console.log(x);
*/
