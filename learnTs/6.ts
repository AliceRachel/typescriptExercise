/**
 * 对象的类型——接口
 * 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
 * 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
 **/
interface Person {
    name: string;
    age: number;
}
//定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。
//多一些属性也是不允许的,少也是错误的
//接口一般首字母大写
//赋值的时候，变量的形状必须和接口的形状保持一致
let tom: Person = {
    name: 'Tom',
    age: 25
};
console.log(tom);
console.log('---------------');

let alice: Person = {
    name: 'Alice',
    age: 20
};
console.log(alice);
console.log('name:'+alice.name);
console.log('---------------');
/**
 * 可选属性
 * 有时我们希望不要完全匹配一个形状，那么可以用可选属性
 * ?
 * 可选属性的含义是该属性可以不存在
 * 这时仍然不允许添加未定义的属性
 **/
interface Person1 {
    name: string;
    age?: number;
}

let tom1: Person1 = {
    name: 'Tom可选属性'
}
console.log(tom1);
console.log('---------------');
/**
 * 任意属性
 * 一个接口允许有任意的属性
 * 使用 [propName: string] 定义了任意属性取 string 类型的值。
 * 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
 * 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用 联合类型
 **/
interface Person2 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom2: Person2 = {
    name: 'Tom',
    gender: 'male'
};
console.log(tom2);
console.log('---------------');

// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: string;
// }
//上面的age是可选属性 是number类型，但是任意类型 [propName: string]: string;是字符串类型，number不属于string类型所以会报错
// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom3: Person3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
console.log('联合属性：'+tom3);
console.log('联合属性：'+tom3.age);
console.log('---------------');

/**
 * 只读属性
 * 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
 * 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
 **/
interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom4: Person4 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
console.log('只读属性：'+tom4);
console.log('只读属性：'+tom4.id);
console.log('---------------');
// interface Person4 {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }
//
// let tom4: Person4 = {
//     id: 89757,
//     name: 'Tom',
//     gender: 'male'
// };
// tom.id = 9527;//使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了。
