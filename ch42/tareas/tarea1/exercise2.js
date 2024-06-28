/* Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */

const arr=[1,2,3,4,5];

const arraDoble=arr.map((vector)=>{
    return vector*2});
console.log(arraDoble);

// NOTA PARA MI: NO OLVIDAR QUE LAS FUNCIONES ARROW SI TRAEN {} TIENEN QUE LLEVAR RETURN