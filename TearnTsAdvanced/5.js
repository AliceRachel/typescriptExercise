/**
 * 进阶
 * 类
 *
 * 传统方法中，JavaScript 通过构造函数实现类的概念，通过原型链实现继承。
 * 而在 ES6 中，我们终于迎来了 class。
 * TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。
 **/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *类的概念
 * 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
 * 对象（Object）：类的实例，通过 new 生成
 * 面向对象（OOP）的三大特性：封装、继承、多态
 * 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
 * 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 * 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
 * 存取器（getter & setter）：用以改变属性的读取和赋值行为
 * 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
 * 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
 * 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
 */
/**
 *ES6 中类的用法:
 * 1.属性和方法
 * 2.类的继承
 * 3.存取器
 * 4.静态方法
 * **/
/**
 * 1.属性和方法§
 * 使用 class 定义类，使用 constructor 定义构造函数。
 * 通过 new 生成新实例的时候，会自动调用构造函数。
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal;
}());
var a = new Animal('Alice');
console.log(a.sayHi()); // My name is Jack
console.log('-------1.属性和方法--------');
/**
 * 2.类的继承§
 * 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
 */
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.sayHi = function () {
        return 'Meow, ' + _super.prototype.sayHi.call(this); // 调用父类的 sayHi()
    };
    return Cat;
}(Animal));
var c = new Cat('extendsTom'); // extendsTom
console.log(c.sayHi()); // Meow, My name is extendsTom
console.log('-------2.类的继承--------');
/**
 *3.存取器
 * 使用 getter 和 setter 可以改变属性的赋值和读取行为
 */
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Object.defineProperty(Animal1.prototype, "name", {
        get: function () {
            return 'Animal1Jack';
        },
        set: function (value) {
            console.log('setter: ' + value);
        },
        enumerable: false,
        configurable: true
    });
    return Animal1;
}());
var a1 = new Animal1('Kitty'); // setter: Kitty
a1.name = 'setTom'; // setter: setTom
console.log("getter " + a1.name); // Jack
console.log('--------3.存取器-------');
/**
 * 静态方法§
 * 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：
 **/
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.isAnimal = function (a2) {
        return a2 instanceof Animal;
    };
    return Animal2;
}());
var a2 = new Animal2('Jack');
Animal2.isAnimal(a2); // true
console.log(Animal2.isAnimal(a2));
// a.isAnimal(a); // TypeError: a.isAnimal is not a function
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // 初始化静态变量
StaticMem.disp(); // 调用静态方法
console.log('---------------');
/**
 *ES7 中类的用法:
 * 1.实例属性
 * 2.静态属性
 **/
/**
 *ES7 中类的用法:
 * 1.实例属性: ES6 中实例的属性只能通过构造函数中的 this.xxx 来定义，ES7 提案中可以直接在类里面定义：
 **/
var Animal3 = /** @class */ (function () {
    function Animal3() {
        this.name = 'Jack';
        // ...
    }
    return Animal3;
}());
var a3 = new Animal3();
console.log(a3.name); // Jack
console.log('--------ES7 中类的用法 2.静态属性-------');
/**
 * 静态属性§
 ES7 提案中，可以使用 static 定义一个静态属性
 */
var Animal4 = /** @class */ (function () {
    function Animal4() {
        // ...
    }
    Animal4.num = 42;
    return Animal4;
}());
console.log("实例属性:" + Animal4.num); // 42
console.log('--------ES7 中类的用法 1.实例属性-------');
/**
 * TypeScript 中类的用法:
 * 1.public private 和 protected§
     TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
     public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
     private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
     protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 * 2.参数属性
 * 3.readonly
 * 4.抽象类
 *
 **/
//public
var Animal5 = /** @class */ (function () {
    function Animal5(name) {
        this.name = name;
    }
    return Animal5;
}());
var a5 = new Animal5('Jack');
console.log(a5.name); // Jack
a5.name = 'Tom';
console.log(a5.name); // Tom
console.log('--------TypeScript 中类的用法 :public-------');
//很多时候，我们希望有的属性是无法直接存取的，这时候就可以用 private 了：
var Animal6 = /** @class */ (function () {
    function Animal6(name) {
        this.name = name;
    }
    return Animal6;
}());
var a6 = new Animal6('Jack');
// console.log(a6.name); // Jack error TS2341: Property 'name' is private and only accessible within class 'Animal'.
// a6.name = 'Tom';// error TS2341: Property 'name' is private and only accessible within class 'Animal'.
//使用 private 修饰的属性或方法，在子类中也是不允许访问的：
var Animal7 = /** @class */ (function () {
    function Animal7(name) {
        this.name = name;
    }
    return Animal7;
}());
var Cat7 = /** @class */ (function (_super) {
    __extends(Cat7, _super);
    function Cat7(name) {
        return _super.call(this, name) || this;
        // console.log(this.name);//error TS2341: Property 'name' is private and only accessible within class 'Animal'.
    }
    return Cat7;
}(Animal7));
//而如果是用 protected 修饰，则允许在子类中访问：
var Animal8 = /** @class */ (function () {
    function Animal8(name) {
        this.name = name;
    }
    return Animal8;
}());
var Cat8 = /** @class */ (function (_super) {
    __extends(Cat8, _super);
    function Cat8(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    return Cat8;
}(Animal8));
//当构造函数修饰为 private 时，该类不允许被继承或者实例化：
var Animal9 = /** @class */ (function () {
    function Animal9(name) {
        this.name = name;
    }
    return Animal9;
}());
// class Cat9 extends Animal9 {//TS2675: Cannot extend a class 'Animal'. Class constructor is marked as private.
//     constructor(name) {
//         super(name);
//     }
// }
//
// let a9 = new Animal('Jack');//TS2673: Constructor of class 'Animal' is private and only accessible within the class declaration.
//当构造函数修饰为 protected 时，该类只允许被继承：
var Animal10 = /** @class */ (function () {
    function Animal10(name) {
        this.name = name;
    }
    return Animal10;
}());
var Cat10 = /** @class */ (function (_super) {
    __extends(Cat10, _super);
    function Cat10(name) {
        return _super.call(this, name) || this;
    }
    return Cat10;
}(Animal10));
// let a10 = new Animal10('Jack');//TS2674: Constructor of class 'Animal' is protected and only accessible within the class declaration.
/**
 * 参数属性§
 修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁。
 **/
var Animal11 = /** @class */ (function () {
    // public name: string;
    function Animal11(name) {
        this.name = name;
        // this.name = name;
    }
    return Animal11;
}());
/**
 * readonly§
 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。
 **/
var Animal12 = /** @class */ (function () {
    function Animal12(name) {
        this.name = name;
    }
    return Animal12;
}());
var a12 = new Animal12('Jack');
console.log(a12.name); // Jack
// a12.name = 'Tom';//TS2540: Cannot assign to 'name' because it is a read-only property.
//注意如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面。
var Animal13 = /** @class */ (function () {
    // public readonly name;
    function Animal13(name) {
        this.name = name;
        // this.name = name;
    }
    return Animal13;
}());
/**
 * 抽象类
 * abstract 用于定义抽象类和其中的抽象方法。
 * 首先，抽象类是不允许被实例化的
 * 其次，抽象类中的抽象方法必须被子类实现
 **/
//下面是一个正确使用抽象类的例子
var Animal14 = /** @class */ (function () {
    function Animal14(name) {
        this.name = name;
    }
    return Animal14;
}());
var Cat14 = /** @class */ (function (_super) {
    __extends(Cat14, _super);
    function Cat14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat14.prototype.sayHi = function () {
        console.log("Meow, My name is " + this.name);
    };
    return Cat14;
}(Animal14));
var cat14 = new Cat14('Tom');
console.log(cat14);
console.log('--------抽象类-------');
//例子二
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("部门名称:" + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "会计和审计") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('会计部每个星期一上午10点开会');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('生成会议报告');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 不能创建一个抽象类的实例
department = new AccountingDepartment(); //  允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); //  此方法不能调用，因为在声明的抽象类中不存在
console.log('--------抽象类 Demo二-------');
/**
 * 类的类型（与接口类似）
 **/
var Animal15 = /** @class */ (function () {
    function Animal15(name) {
        this.name = name;
    }
    Animal15.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal15;
}());
var a15 = new Animal15('类的类型');
console.log(a15.sayHi()); // My name is Jack
console.log('--------类的类型-------');
//# sourceMappingURL=5.js.map