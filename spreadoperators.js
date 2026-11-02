// spread operators with boolean.
// boolean cant access directly in spread operator.it is not iterable.
// let a=true;
// console.log([...a]);

// converting boolen into String.we can access
// let b= true;
// let result=[...String(b)];
// console.log(result)
// --------------------------------------------

// spread operators with string.
// 1.Converting a String into an Array
// let str="HELLO";
// let result=[...str];
// console.log(result);

// 2.Copying a String into a New Array
// let str="JAVASCRIPT"
// let arr =[...str]
// console.log(arr)

//3.Combining two strings.
// let str1="HELLO"
// let str2="WORLD"
// let result=[...str1,...str2]
// console.log(result)

//4.Adding characters between two strings.
// let str1="HELLO"
// let str2="WORLD"
// let result=[...str1, " ", ...str2];
// console.log(result);

//5.Passing string characters as function Arguments.
// function display(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c)
// }
// let str="ABC";
// display(...str);

// 6.Finding the Maximum character code.
// let str="ABCDE"
// let result=Math.max(...[...str].map(ch => ch.charCodeAt(0)));
// console.log(result)

// 7.Adding characters at the Beginning.
// let str="WORLD"
// let result=["H","E","L","L","O",...str];
// console.log(result)

// 8.Adding characters at the End.
let str="HELLO"
let result=[...str,"W","O","R","L","D"];
console.log(result)