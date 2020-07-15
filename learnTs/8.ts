/**
 * 函数的类型
 * 在 TypeScript 中，数组类型有多种定义方式，比较灵活。
 **/

/**
 * 常见的定义函数的方式 ：函数声明和函数表达式
 * 函数声明
 **/

// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}
console.log(sum(1,2));
console.log('---------------');
// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};
console.log(mySum(4,2));
console.log('---------------');
//javascript写法
// function Person(age) {
//     this.age = age
//     this.growOld = () => {
//         this.age++;
//     }
// }
// let person = new Person(1);
// setTimeout(person.growOld,1000);
//
// setTimeout(function() { console.log(person.age); },2000); // 2
class Person {
    constructor(public age:number) {}
    growOld = () => {
        this.age++;
    }
}
let person = new Person(1);
setTimeout(person.growOld,1000);

setTimeout(function() { console.log(person.age); },2000); // 2
/** 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：**/
function sum1(x: number, y: number): number {
    return x + y;
}
console.log(sum1(11,2));
console.log('---------------');
/** 注意，输入多余的（或者少于要求的）参数，是不被允许的：**/

/**
 * 常见的定义函数的方式 ：函数声明和函数表达式
 * 函数表达式
 **/
let mySum1 = function (x: number, y: number): number {
    return x + y;
};
console.log(mySum1(33,2));
console.log('---------------');
/**
 * 这是可以通过编译的，
 * 不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，
 * 而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
 * 如果需要我们手动给 mySum 添加类型，则应该是这样：
 **/
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
console.log(mySum2(1,20));
console.log('---------------');
/**
 * 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
 * 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
 * 在 ES6 中，=> 叫做箭头函数，应用十分广泛，可以参考 ES6 中的箭头函数。
 **/
/**
 * 用接口定义函数的形状
 **/
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}//采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
/**
 * 可选参数
 *  ?
 *  需要注意的是，可选参数必须接在必需参数后面。
 *  换句话说，可选参数后面不允许再出现必需参数了：
 **/
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
console.log(tomcat+' '+tom);
console.log('---------------');
/**
 参数默认值
 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
 此时就不受「可选参数必须接在必需参数后面」的限制了：
 **/
// function buildName1(firstName: string, lastName: string = 'Cat') {
//     return firstName + ' ' + lastName;
// }
// let tomcat1 = buildName('Tom', 'Cat');
// let tom1 = buildName('Tom');
//修改为
function buildName1(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat1 = buildName('Alice', 'prime');
let cat1 = buildName(undefined, 'Cat');
console.log(tomcat1+' '+cat1);
console.log('---------------');

/**
 * 重载
 * 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
 * 比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。
 * 利用联合类型，我们可以这么实现：
 *
 * TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
 **/
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(123));
console.log(reverse('heool'));

export {}