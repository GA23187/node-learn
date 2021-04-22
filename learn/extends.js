// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function () {
//         console.log('gg')
//     }
// }
// Person.prototype.info = function () {
//     return this.name
// }
class Person {
    constructor(name, age) {
        this.age = 'age'
        this.name = 'name'
        this.sayHello = function () {
            console.log('gg')
        }
    }
    info() {
        return this.name
    }
}

class Student extends Person {
    constructor(name, age, sex) {
        super(name, age)// super继承父类的属性，必须调用后才能使用this
        this.name = name
        this.sex = sex
    }
    getInfo() {
        return super.info() + '继承'//使用super调用父类的方法，但是里面的this指向的是子类
    }
    print() {
        console.log(this.getInfo()) // zyq继承
        super.name = 'zyq2'// 修改的是子类的属性
        console.log(this.name) // zyq2
        //super只能调用父类方法，调用不了属性
        console.log(super.name)// undefined 
    }
}

var stu = new Student("zyq", "22", "male")