"use strict";
/**
 * 函数的类型
 * 在 TypeScript 中，数组类型有多种定义方式，比较灵活。
 **/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 常见的定义函数的方式 ：函数声明和函数表达式
 * 函数声明
 **/
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
console.log('---------------');
// 函数表达式（Function Expression）
var mySum = function (x, y) {
    return x + y;
};
console.log(mySum(4, 2));
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
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person;
}());
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000); // 2
/** 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：**/
function sum1(x, y) {
    return x + y;
}
console.log(sum1(11, 2));
console.log('---------------');
/** 注意，输入多余的（或者少于要求的）参数，是不被允许的：**/
/**
 * 常见的定义函数的方式 ：函数声明和函数表达式
 * 函数表达式
 **/
var mySum1 = function (x, y) {
    return x + y;
};
console.log(mySum1(33, 2));
console.log('---------------');
/**
 * 这是可以通过编译的，
 * 不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，
 * 而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
 * 如果需要我们手动给 mySum 添加类型，则应该是这样：
 **/
var mySum2 = function (x, y) {
    return x + y;
};
console.log(mySum2(1, 20));
console.log('---------------');
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
}; //采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
/**
 * 可选参数
 *  ?
 *  需要注意的是，可选参数必须接在必需参数后面。
 *  换句话说，可选参数后面不允许再出现必需参数了：
 **/
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
console.log(tomcat + ' ' + tom);
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
function buildName1(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
var tomcat1 = buildName('Alice', 'prime');
var cat1 = buildName(undefined, 'Cat');
console.log(tomcat1 + ' ' + cat1);
console.log('---------------');
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(123));
console.log(reverse('heool'));
//# sourceMappingURL=8.js.map