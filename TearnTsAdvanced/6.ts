/**
 * 类与接口：
 * 接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述
 * 这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。
 **/
/**
 *一 .类实现接口
 *实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，
 * 有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），
 * 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。
 *
 * Demo:
 * 门是一个类，防盗门是门的子类。
 * 如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
 * 这时候如果有另一个类，车，也有报警器的功能，
 * 就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：
 */
interface Alarm {
    alert1(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert1() {
        console.log('SecurityDoor alert 防盗门报警装置');
    }
}

class Car implements Alarm {
    alert1() {
        console.log('Car alert 汽车报警装置');
    }
}
let securityDoor: SecurityDoor;
securityDoor = new SecurityDoor();
securityDoor.alert1();

let car:Car;
car = new Car();
car.alert1();
console.log("--------------------");
//一个类可以实现多个接口
interface Alarm1 {
    alert(): void;
}

interface Light1 {
    lightOn(): void;
    lightOff(): void;
}

class Car1 implements Alarm1, Light1 {
    alert() {
        console.log('汽车 报警装置');
    }
    lightOn() {
        console.log('汽车 灯亮');
    }
    lightOff() {
        console.log('汽车 关灯');
    }
}
let car1:Car1;
car1 = new Car1();
car1.alert();
car1.lightOn();
car1.lightOff();
console.log("---------上例中，Car 实现了 Alarm 和 Light 接口，既能报警，也能开关车灯-----------");

/**
 * 二.接口继承接口
 * 接口与接口之间可以是继承关系
 *
 * Demo：LightableAlarm 继承了 Alarm，除了拥有 alert 方法之外，还拥有两个新方法 lightOn 和 lightOff
 */
interface Alarm2 {
    alert(): void;
}

interface LightableAlarm2 extends Alarm2 {
    lightOn(): void;
    lightOff(): void;
}

/**
 * 三.接口继承类§
 * 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的
 */
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
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
export {}