/* Write a program to compute the sum and product (multiplication) of an array of numbers. 
Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

const arr=[1,2,3,4];
const arrSum=arr.reduce((resulSum,i)=>
    { return resulSum+i;
        
    },0);
console.log(arrSum);

const arrProduct=arr.reduce((sumProduct,actualvalue)=>
    sumProduct*actualvalue,1);

console.log(arrProduct);