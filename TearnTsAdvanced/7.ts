/**
 * 泛型
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 **/
//首先，我们来实现一个函数 createArray，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值
function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
console.log(createArray(3, 'x'));//以上缺陷 ：并没有准确的定义返回值的类型
console.log("------------");
//使用泛型
//Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型。
function createArray1<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray1<string>(3, 'x'); // ['x', 'x', 'x']
console.log(createArray1<string>(3, 'x'));
//接着在调用的时候，可以指定它具体的类型为 string。当然，也可以不手动指定，而让类型推论自动推算出来
console.log(createArray1(3, 'x'));
console.log("------------");
/**
 * 多个类型参数
 * 定义泛型的时候，可以一次定义多个类型参数
 **/
//我们定义了一个 swap 函数，用来交换输入的元组。
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
console.log(swap([7, 'seven']));
console.log("------------");
/**
 * 泛型约束§
 * 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
 **/
function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length);// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.
    return arg;
}
//这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束

interface Lengthwise1 {
    length: number;
}

function loggingIdentity1<T extends Lengthwise1>(arg: T): T {
    console.log('数组长度为：'+arg.length);
    return arg;
}

let a =[1,2,3,4,4]
loggingIdentity1(a);
console.log("------------");


//多个类型参数之间也可以互相约束
function copyFields<T extends U,U>(target:T,source:U):T {
    for(let id in source)
    {
        target[id] = (<T>source)[id];
    }
    return target;
}

let x = {a:1,b:2,c:3,d:4};
copyFields(x,{b:10,d:20});
export {}


















