/**
 * JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。
 前五种原始数据类型在 TypeScript 中的应用。
 **/
/*
一.布尔值
 */
var isDone = false;
console.log(isDone); //使用构造函数 Boolean 创造的对象不是布尔值
var createdByNewBoolean = new Boolean(1); //new Boolean() 返回的是一个 Boolean 对象：
console.log(createdByNewBoolean);
var createdByNewBoolean1 = new Boolean(0);
console.log(createdByNewBoolean1);
var createdByBoolean = Boolean(1); //直接调用 Boolean 也可以返回一个 boolean 类型
console.log(createdByBoolean);
//在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样，
console.log('---------------');
/*
二.数值 number
 */
var decLiteral = 6;
var hexLiteral = 0xf00d; // ES6 中的二进制表示法
var binaryLiteral = 10; // ES6 中的八进制表示法
//ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
console.log('decLiteral:' + decLiteral + '\n' + 'hexLiteral:' + hexLiteral + '\n' + 'binaryLiteral:' + binaryLiteral + '\n' + 'octalLiteral:' + octalLiteral + '\n' + 'notANumber:' + notANumber + '\n' + 'infinityNumber:' + infinityNumber + '\n');
console.log('---------------');
/*
三.字符串 string
 */
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
console.log('myName:' + myName + '\n' + 'myAge:' + myAge + '\n' + 'sentence:' + sentence + '\n');
// @ts-ignore
var sentence1 = "Hello, my name is " + myName;
console.log(sentence1);
console.log('---------------');
/*
四.空值 void
JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
 */
function alertName() {
    console.log('My name is 空值');
}
// console.log(alertName());
alertName();
console.log('---------------');
//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
var s1 = undefined;
var s2 = null;
console.log('s1:' + s1 + '-----s2:' + s2);
console.log('---------------');
/*
五.Null 和 Undefined
J在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
 */
var u = undefined;
var n = null;
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
console.log('u:' + u + '-----n:' + n);
//而 void 类型的变量不能赋值给 number 类型的变量：
var u1;
var num1 = u;
console.log('u1:' + u1 + '\n' + 'num1:' + num1 + '\n');
console.log('---------------');
//# sourceMappingURL=2.js.map