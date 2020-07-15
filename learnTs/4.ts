/**
 * 类型推论
 * TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。
 * 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
 **/
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
console.log(myFavoriteNumber);
export {};
//问题
//cannot redeclare block-scoped variable 'a'
//不能重新声明块作用域变量“a”
//https://www.jianshu.com/p/78268bd9af0a

//CRUD —— create、read、update、delete  增删查改.....只会写简单后端代码的搬运工。