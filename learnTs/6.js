//定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。
//多一些属性也是不允许的,少也是错误的
//接口一般首字母大写
//赋值的时候，变量的形状必须和接口的形状保持一致
var tom = {
    name: 'Tom',
    age: 25
};
console.log(tom);
console.log('---------------');
var alice = {
    name: 'Alice',
    age: 20
};
console.log(alice);
console.log('name:' + alice.name);
console.log('---------------');
var tom1 = {
    name: 'Tom可选属性'
};
console.log(tom1);
console.log('---------------');
var tom2 = {
    name: 'Tom',
    gender: 'male'
};
console.log(tom2);
console.log('---------------');
var tom3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
console.log('联合属性：' + tom3);
console.log('联合属性：' + tom3.age);
console.log('---------------');
var tom4 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
console.log('只读属性：' + tom4);
console.log('只读属性：' + tom4.id);
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
//# sourceMappingURL=6.js.map