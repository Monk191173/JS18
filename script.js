'use strict';
/*----------------------------------------------1 */
let arr = [5, 6, 7, 8, 9];
console.log(`Mass=${arr}`);
let sum = 0;
arr.forEach(value => sum += value);
console.log(`Summ of elements is:${sum}`);
console.log('------End of forEach------');

/*----------------------------------------------2 */

console.log(`Mass=${arr}`);
let myMapArr = arr.map(value => value * value);
console.log(`New Mas is:${myMapArr}`);
console.log('------End of Map------');

/*---------------------------------------------3 */

let arrOb = [
    {
        name: 'Ivan',
        country: 'Ukraine'
    },
    {
        name: 'Petro',
        country: 'Ukraine'
    },
    {
        name: 'Miguel',
        country: 'Cuba'
    }
];
console.log(`Do you all from Ukraine ? =${arrOb.every(value => value.country.toLowerCase() == 'ukraine')}`);
console.log('------End of Every------');

/*-----------------------------------------------4 */

console.log(`Anyone is from cuba ? =${arrOb.some(value => value.country.toLowerCase() == 'cuba') ? 'Yes' : 'No'}`);
console.log('------End of Some------');

/*-----------------------------------------------5 */

let arrFil = [1, 'string', [3, 4], 5, [6, 7]];
console.log('Array is :', arrFil);
arrFil = arrFil.filter(val => Array.isArray(val));
console.log('Now array is :', arrFil);
console.log('------End of Filter------');

/*---------------------------------------------------6 */

let arrRed = [1, 2, 5, 0, 4, 5, 6];
console.log('Mass before zero', arrRed);
const suma = arrRed.reduce(function (start, val, ind, arr) {
    if (val == 0) arr.splice(arr.indexOf(0), arr.length - arr.indexOf(0))
    return start += val
}, 0);
console.log('Summ before zero is :', suma);
/*********/
let arrRed10 = [1, 2, 3, 0, 4, 5, 6];
console.log('Mass for summing more 10', arrRed10);
const suma10 = arrRed10.reduce(function (start, val, ind, arr) {
    start += val;
    if (start > 10) {
        arr.splice(ind, arr.length - ind)
        return ind + 1;
    }
    else return start
}, 0);
console.log('We are summed :', suma10);
console.log('------End of Reduce------');

/*----------------------------------------------------7 */

let arrSqr = [1, -2, 3, 0, 4, -5, 6, -11];
console.log('Mass for sqrt', arrSqr);
let newArr = Array.from(arrSqr.filter(val => val > 0), val => Math.sqrt(val));
console.log('Mass with positive sqrt', newArr);
console.log('-----Its all------');
