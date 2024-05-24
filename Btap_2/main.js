// //BT1
// function reverseArray(arr) {
    
//     let temp;
    
//     for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        
//         temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }

// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);

// console.log(reversedArray);

//BT2
// function findValueInArray(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return i;
//         }
//     }
//     return -1;
// }

// function getArrayFromUser() {
  
//     const userInput = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu phẩy (,):");
   
//     return userInput.split(',').map(item => item.trim());
// }

// const userArray = getArrayFromUser();

// const valueToFind = prompt("Nhập một giá trị để tìm trong mảng:");

// const position = findValueInArray(userArray, valueToFind);

// if (position !== -1) {
//     console.log(`Giá trị "${valueToFind}" nằm ở vị trí ${position} trong mảng.`);
// } else {
//     console.log(`Giá trị "${valueToFind}" không có trong mảng.`);
// }

//BT5

// const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];

// function displayTodoList() {
//     console.log("Current todo list:");
//     todoList.forEach((todo, index) => {
//         console.log(`${index + 1}. ${todo}`);
//     });
//     console.log("");
// }

// function addTodo() {
//     const newTodo = prompt("Enter a new todo:");
//     if (newTodo) {
//         todoList.push(newTodo);
//         displayTodoList();
//     } else {
//         console.log("Invalid input. Todo not added.");
//     }
// }

// function readTodos() {
//     displayTodoList();
// }

// function updateTodo() {
//     const position = parseInt(prompt("Enter the position of the todo to update:"), 10);
//     if (position > 0 && position <= todoList.length) {
//         const newContent = prompt("Enter the new content:");
//         if (newContent) {
//             todoList[position - 1] = newContent;
//             displayTodoList();
//         } else {
//             console.log("Invalid input. Todo not updated.");
//         }
//     } else {
//         console.log("Invalid position.");
//     }
// }

// function deleteTodo() {
//     const position = parseInt(prompt("Enter the position of the todo to delete:"), 10);
//     if (position > 0 && position <= todoList.length) {
//         todoList.splice(position - 1, 1);
//         displayTodoList();
//     } else {
//         console.log("Invalid position.");
//     }
// }

// function main() {
//     let command;
//     do {
//         command = prompt("Enter a command (C/R/U/D) or Q to quit:").toUpperCase();
//         switch (command) {
//             case "C":
//                 addTodo();
//                 break;
//             case "R":
//                 readTodos();
//                 break;
//             case "U":
//                 updateTodo();
//                 break;
//             case "D":
//                 deleteTodo();
//                 break;
//             case "Q":
//                 console.log("Exiting the application.");
//                 break;
//             default:
//                 console.log("Invalid command.");
//         }
//     } while (command !== "Q");
// }

// main();


//BT3
// const numberArray = [5, 12, 23, 34, 45, 56, 67, 78, 89, 90];
// function checkNumber() {
//     let userNumber;
//     while (true) {
//         userNumber = prompt("Nhập một số bất kỳ (hoặc nhập 'exit' để thoát):");   
//         if (userNumber.toLowerCase() === 'exit') {
//             alert("Cảm ơn bạn đã sử dụng chương trình. Tạm biệt!");
//             break;
//         }
//         userNumber = parseInt(userNumber, 10);
//         if (isNaN(userNumber)) {
//             alert("Vui lòng nhập một số hợp lệ.");
//             continue;
//         }
//         if (numberArray.includes(userNumber)) {
//             alert("Bingo");
//         } else {
//             alert("Chúc bạn may mắn lần sau");
//         }
//     }
// }
// checkNumber();


//BT4
// function findMaxNumber() {
//     const userInput = prompt("Nhập vào một dãy số, cách nhau bởi dấu phẩy (ví dụ: 3, 5, 7, 2, 8):");

//     const numberArray = userInput.split(',').map(Number);

//     let maxNumber = numberArray[0];

//     for (let i = 1; i < numberArray.length; i++) {
//         if (numberArray[i] > maxNumber) {
//             maxNumber = numberArray[i];
//         }
//     }

//     alert(`Giá trị lớn nhất trong dãy số là: ${maxNumber}`);
// }

// findMaxNumber();

