"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert1 = function () {
        console.log('SecurityDoor alert 防盗门报警装置');
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert1 = function () {
        console.log('Car alert 汽车报警装置');
    };
    return Car;
}());
var securityDoor;
securityDoor = new SecurityDoor();
securityDoor.alert1();
var car;
car = new Car();
car.alert1();
console.log("--------------------");
var Car1 = /** @class */ (function () {
    function Car1() {
    }
    Car1.prototype.alert = function () {
        console.log('汽车 报警装置');
    };
    Car1.prototype.lightOn = function () {
        console.log('汽车 灯亮');
    };
    Car1.prototype.lightOff = function () {
        console.log('汽车 关灯');
    };
    return Car1;
}());
var car1;
car1 = new Car1();
car1.alert();
car1.lightOn();
car1.lightOff();
console.log("---------上例中，Car 实现了 Alarm 和 Light 接口，既能报警，也能开关车灯-----------");
/**
 * 三.接口继承类§
 * 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
//上述写法等价于
// class Point {
//     x: number;
//     y: number;
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
// }
//
// interface PointInstanceType {
//     x: number;
//     y: number;
// }
console.log(point3d);
//# sourceMappingURL=6.js.map