// console.log('Hullol!');

// Variables

// var color = 'red';
// let age = 30;
// console.log(age);

// let wrods = '"Boboyo"';
// console.log(wrods);

// let message = '${wrods} has ${age} pancakes';
// console.log(message)

// Constants

// const pi = 3.14;
// console.log(pi);

// Array Literals

// const numbers = new Array(1, 2, 3, 4, 5,6);
// numbers [2] = 9;
// console.log(numbers);
// console.log(numbers[3]);
// numbers[7] = 8;
// console.log(numbers);

// Objects

// const person = {
//     firstname: "john",
//     lastname: "Doe",
//     age: 20
// }

// person.email = 'smitj@email.com'

// console.log(person);

// // Bracket notation
// console.log(person.firstname);
// console.log(person['lastname']);


// From boston down to the mahabby, you gotta get a hobby, like slaying all your neighbors and displaying all the bodies, so let's all go to the lobby, and get ourselves a treat.


// function hello(name) {
//     console.log('Console, LOG!!! "' + name + '"')
// }

// hello('Bob');


// function convertPercent(num) {
//     return num/100;
// }

// console.log(convertPercent(250));

// const convertPercentCool = num => num/100;

// console.log(convertPercentCool(250));

// let i = 0;
// while (i < 10) {
//     i++;
// }

// const people =  [
// {
//     firstname: "john",
//     lastname: "Doe",
//     age: 20
// }, 
// {
//     firstname: "Susey",
//     lastname: "Doer",
//     age: 205
// }
// ];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (let person of people) {
//     console.log(person.firstname);
// }

// people.forEach(person => console.log(person.age));

// let bang = 30;
// if (bang == '30') {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// console.log(bang === '30');


// let x = 4;
// x = x<5? x+2 : x-2;
// console.log(x);
// x = x<5? x+2 : x-2;
// console.log(x);


// let animal = 'dog';
// switch(animal) {
//     case 'dog':
//         console.log('dog');
//         break;
//     case 'cat' : 
//         console.log('cat');
//         break;
//     default:
//         console.log('None');
// }



const list = document.querySelector('#list');
console.log(list);
list.lastElementChild.remove();

const btn = document.getElementById("button1");
console.log(btn);
const btn2 = document.getElementById("button2");
console.log(btn2);

let boomboy = 0;
btn.addEventListener('click', function(e) {

    const newLi = document.createElement("li");
    newLi.innerHTML="Yo";
    list.append(newLi);

});
btn2.addEventListener('click', function(e) {
    console.log("The hue-manity! Bwhaaaaaaa!")
});
btn2.addEventListener('mouseover', function(e) {
    btn2.style.backgroundColor='yellow'
});
btn2.addEventListener('mouseout', function(e) {
    btn2.style.backgroundColor='red'
});

// Stuff for to do list goes here

const newTask = document.querySelector('#new-task-input');
const addTaskBtn = document.querySelector('.add-task-btn');
const removeCompleteBtn = document.querySelector('.remove-complete-btn');
const taskList = document.querySelector('.task-list');
const taskTemplate = document.querySelector('#task-template');
let id = 1;

newTask.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && inputValid()) {
        addTask();
    }

});
addTaskBtn.addEventListener('click', () => {
    if (inputValid()) {
        addTask();
    }
});
removeCompleteBtn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        const checked = task.querySelector('input').checked;
        if (checked) {
            task.remove();
        }
    })
});

function addTask() {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    checkbox.id = id;
    const label = taskElement.querySelector('label');
    label.htmlFor = id;
    label.append(newTask.value);
    taskList.appendChild(taskElement);
    newTask.value = '';
    id++;
}
function inputValid() {
    return newTask.value !== '';
}


// MAIN IDEAS:
// Put polish cow on there
// Cookie Clecker? Probably too hard
// Tic Tac Toe.
// GET ISHAAN'S WORLDE PAGE
// Make disco floor. Put in music from "Disco Panzer." Use Timer.
// Buttons/Cards
// BOOTSTRAPS!!!
// Use opacity and a TIMER to remove things.