/* let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];


//console.log (student1Courses.filter((word)=>(word=="Programming")));

let result=student1Courses.filter(filtro=>student2Courses.includes(filtro));
console.log(result);


