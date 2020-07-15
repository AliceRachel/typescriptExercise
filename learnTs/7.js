"use strict";
/**
 * 数组的类型
 * 在 TypeScript 中，数组类型有多种定义方式，比较灵活。
 **/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 定义数组
 * 方法一 「类型 + 方括号」表示法
 * 数组的项中不允许出现其他的类型（定义类型外的所有类型出现在数组中会报错）
 * 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
 **/
var fibonacci = [1, 1, 2, 3, 5];
console.log(fibonacci);
console.log('---------------');
// let fibonacci1: number[] = [1, '1', 2, 3, 5];//error TS2322: Type 'string' is not assignable to type 'number'.
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
fibonacci.push(9);
console.log(fibonacci);
console.log('---------------');
// fibonacci.push('9');//error TS2345: Argument of type '"9"' is not assignable to parameter of type 'number'.
/**
 * 可以使用数组泛型（Array Generic）
 * Array<elemType> 来表示数组
 **/
var fibonacci1 = [1, 1, 2, 3, 5];
console.log(fibonacci1);
console.log('---------------');
var fibonacci2 = ['1', '6', '6', '11', '44'];
console.log(fibonacci2);
console.log('---------------');
var fibonacci3 = [1, 2, 3, 8, 9, 4, 4, 4, 2];
console.log(fibonacci3);
console.log('---------------');
//报错
// function sum() {
//     let args: number[] = arguments;//上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口
// }
function sum() {
    var args = arguments;
}
console.log(sum);
console.log('---------------');
/**
 * any 在数组中的应用
 * 一个比较常见的做法是，用 any 表示数组中允许出现任意类型
 **/
var list = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
console.log(list);
console.log('---------------');
//# sourceMappingURL=7.js.map