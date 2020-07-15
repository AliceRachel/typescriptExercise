/**
 * 类型断言
 * 类型断言（Type Assertion）可以用来手动指定一个值的类型
 * 语法§
 * 值 as 类型
 * 或
 * <类型>值
 **/
/**
 * 类型断言的用途:
 * 将一个联合类型断言为其中一个类型
 *
 **/
// interface Cat {
//     name: "aaa";
//     run(): void;
// }
// interface Fish {
//     // name: string;
//     name: "cat";
//     swim(): void;
// }
//
// function getName(animal: Cat | Fish) {
//     return animal.name;
// }
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
// console.log('isFish'+isFish);
console.log('---------------');