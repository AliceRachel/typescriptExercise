/**
 * 数组的类型
 * 在 TypeScript 中，数组类型有多种定义方式，比较灵活。
 **/

/**
 * 定义数组
 * 方法一 「类型 + 方括号」表示法
 * 数组的项中不允许出现其他的类型（定义类型外的所有类型出现在数组中会报错）
 * 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
 **/
let fibonacci: number[] = [1, 1, 2, 3, 5];
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
let fibonacci1: Array<number> = [1, 1, 2, 3, 5];
console.log(fibonacci1);
console.log('---------------');
let fibonacci2: Array<string> = ['1', '6', '6', '11', '44'];
console.log(fibonacci2);
console.log('---------------');

/**
 * 用接口表示数组
 * 虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
 * 接口常用来表示类数组
 *
 * 类数组
 * 不是数组类型，比如 arguments
 * 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等。 表示 let args: IArguments = arguments;
 *
 * 其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
     interface IArguments {//内置对象
        [index: number]: any;
        length: number;
        callee: Function;
    }
 **/
interface ArrayTest {
    [index: number]:number;//ArrayTest表示：只要索引的类型是数字时，那么值的类型必须是数字。
}
let fibonacci3:ArrayTest = [1,2,3,8,9,4,4,4,2];
console.log(fibonacci3);
console.log('---------------');

//报错
// function sum() {
//     let args: number[] = arguments;//上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口
// }
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
console.log(sum);
console.log('---------------');

/**
 * any 在数组中的应用
 * 一个比较常见的做法是，用 any 表示数组中允许出现任意类型
 **/
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
console.log(list);
console.log('---------------');
export {};