"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 泛型
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 **/
//首先，我们来实现一个函数 createArray，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
console.log(createArray(3, 'x')); //以上缺陷 ：并没有准确的定义返回值的类型
console.log("------------");
//使用泛型
//Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型。
function createArray1(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray1(3, 'x'); // ['x', 'x', 'x']
console.log(createArray1(3, 'x'));
//接着在调用的时候，可以指定它具体的类型为 string。当然，也可以不手动指定，而让类型推论自动推算出来
console.log(createArray1(3, 'x'));
console.log("------------");
/**
 * 多个类型参数
 * 定义泛型的时候，可以一次定义多个类型参数
 **/
//我们定义了一个 swap 函数，用来交换输入的元组。
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
console.log(swap([7, 'seven']));
console.log("------------");
/**
 * 泛型约束§
 * 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
 **/
function loggingIdentity(arg) {
    // console.log(arg.length);// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.
    return arg;
}
function loggingIdentity1(arg) {
    console.log('数组长度为：' + arg.length);
    return arg;
}
var a = [1, 2, 3, 4, 4];
loggingIdentity1(a);
console.log("------------");
//多个类型参数之间也可以互相约束
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
//# sourceMappingURL=7.js.map