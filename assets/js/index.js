// function Box(size, color, content) {
//     this.content = content;
//     this.color = color;
//     this.size = size;
//     this.open = function () {
//         return `${this.content} opened`;
//     };
// }

// function Crate(size, material, content) {
//     this.content = content;
//     this.size = size;
//     this.material = material;
// }

// Crate.prototype = new Box(); //задаем прототип Box для Crate 

// const crate1 = new Crate('small', 'wood', 'testContent');

// console.log(crate1);
// console.log(crate1.open());

// function User (isMale, name, age) {
//     this.isMale = isMale;
//     this.name = name;
//     this.age = age;
//     this.sayHi = function() {
//         console.log(`Hi, my name is ${name}!`)
//     }
// }

// function Employee(salary, isMale, name, age) {
//     this.salary = salary;
//     this.isMale = isMale;
//     this.name = name;
//     this.age = age;
// }

// Employee.prototype = new User();

// const employee1 = new Employee(10000, true, 'Vasya', 45);
// const user1 = new User(true, 'Vasya', 45);
// console.log(employee1);
// console.log(user1);

// const controlObject = {
//     color: 'color',
//     size: 'size',
// }

// const anotherObject = controlObject;

// const arr = [1, 'u', '65', 44, {test: 'test'}, arr2=[]]

// function logArrayElements(array) {
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// logArrayElements(arr);

function MyArray() {
    this.length = 0;

    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }
}

function ArrayMethods() {
    this.pop = function () {
        
        let lastElement = this[this.length-1];
        delete this[this.length-1]; 
        this.length = this.length - 1;
        return lastElement;
    }

    this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }
    return this.length;
    }
}

MyArray.prototype = new ArrayMethods();

const myArr = new MyArray(1, '22', 'fffff', 44, 4444);
console.log(myArr);
console.log(myArr.pop());
console.log(myArr.push(2,2,2,2));
console.log(myArr);

// let input = prompt('Choose the food: 1 - Pizza, 2 - French fries, 3 - Burger')
// switch (input) {
//     case 'A':
//     case 'a':
//     case '1': {
//         console.log('Your choose is pizza');
//     }
//         break;
//     case 'B':
//     case 'b':
//     case '2': {
//         console.log('Your choose is french fries');
//     }
//         break;
//     case 'C':
//     case 'c':
//     case '3': {
//         console.log('Your choose is burger');
//     }
//         break;
//     default: console.log('Unknown action');
// }

    