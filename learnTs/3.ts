/**
 * 任意值 any类型
 **/
//如果是一个普通类型，在赋值过程中改变类型是不被允许的。但如果是 any 类型，则允许被赋值为任意类型。
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
console.log(myFavoriteNumber);

//任意值的属性和方法
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
//也允许调用任何方法：
let anyThing1: any = 'Tom';
anyThing1.setName('Jerry');
anyThing1.setName('Jerry').sayHello();
anyThing1.myName.setFirstName('Cat');

//未声明类型的变量
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let something;
something = 'seven';
something = 7;

something.setName('Tom');
//等价于
let something1: any;
something1 = 'seven';
something1 = 7;

something1.setName('Tom');