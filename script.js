/* Assignment 03: Starting a Todo List App
 *
 * You are going to build the brains of a simple Todo List application
 * in JavaScript. You don't have to worry about the look of the app for now.
 * We will make it look awesome in Assignment 04.
 *
 * For now, we'll focus on giving the application the following features:
 * 1. Add a new todo item
 * 2. Delete a todo item
 * 3. Mark a todo item as completed
 * 4. Delete a todo item
 * 5. Clear all completed todos
 *
 * The following code is the starting point for this assignment.
 *
 * You will have to write the code to initialise the todoItems array and
 * for the functions below.
 *
 * 1. addToDoItem(text)
 * 2. removeToDoItem(todoId)
 * 3. markToDoItemAsCompleted(todoId)
 * 4. deleteToDoItem(todoId)
 * 5. clearCompletedTasks()
 *
 * YOU MUST NOT CHANGE ANY OF THE FUNCTION NAMES OR THE AUTOMATED TESTS WILL FAIL
 *
 * As you write each function, press on the "Run Tests" button in the browser
 * to run the automated tests and check your work.
 *
 * You can also add your own tests and debug statements at the bottom of this file.
 *
 */


// Data storage - Initialize the array of To Do items
//
// NOTE:
//
// - You must use the following object literal structure when creating new todo items
// - The ID (id) of each todo item must be unique (you can use the length of the array as the ID or generate a random number)
//
// {
//   id: 0,
//   text: "This is a todo item",
//   completed: false,
// }

// Initialise an empty array with the variable name todoItems

// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// The todo item should have the structure shown above
// It's really important that you have a unique ID for each todo item that you push onto the array
// the function does not need to return anything

//Here is the function to add a todo item to the list
// Data storage - Initialize the array of To Do items
let todoItems = [];

// Use a counter variable to generate unique IDs
let todoCounter = 0;

// Function to add a todo to the list
function addToDoItem(text) {
  // Generate a unique ID for the new todo item using the counter
  const newTodo = {
    id: todoCounter,
    text: text,
    completed: false,
  };

  // Increment the counter for the next ID
  todoCounter++;

  // Add the new todo item to the todoItems array
  todoItems.push(newTodo);
}

// Function to remove a todo to the list
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything
  // Implement the logic to add a task here

  //Here is the function to remove a todo item from the list
  // Function to remove a todo from the list
function removeToDoItem(todoId) {
  // Find the index of the todo item with the specified id
  const index = todoItems.findIndex(function(todo) {
    return todo.id === todoId;
  });
  
  // If the todo item is found, remove it from the array
  if (index !== -1) {
    todoItems.splice(index, 1);
  }
}


// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
  // Implement the logic to mark a task as completed here

//Here is my function to mark a task as completed
// Function to mark a task as completed
function markToDoItemAsCompleted(todoId) {
  // Find the todo item with the specified id
  const todo = todoItems.find(function(todo) {
    return todo.id === todoId;
  });
  
  // If the todo item is found, set its completed property to true
  if (todo) {
    todo.completed = true;
    }
  }

// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
  // Implement the logic to remove a task here
  
//Here is my function to delete a task from the array
function deleteToDoItem(todoId) {
  // Implement the logic to remove a task here
  const index = todoItems.findIndex(todo => todo.id === todoId);

  // If the todo item is found, remove it from the array
  if (index !== -1) {
    todoItems.splice(index, 1);
  }
}



// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array

  // Implement the logic to clear completed tasks here

// Function to clear all completed tasks
function clearCompletedTasks() {
  //Loop through the array of todos, and when you find a todo item that is marked
  for (let i = todoItems.length - 1; i >= 0; i--) {
    if (todoItems[i].completed) {
      // Remove completed todo items using splice
      todoItems.splice(i, 1);
    }
  }
}

// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed

let todoList = [
  { id: 1, task: 'Finish homework', completed: false },
  { id: 2, task: 'Go to the gym', completed: true },
  { id: 3, task: 'Finish assignment 3 for web development', completed: false}
  // Add more tasks as needed
];

// Example function to add a new todo
function addTodo(task) {
  if (typeof task !== 'string' || task === '') {
    console.error('Invalid input. Please provide a valid task.');
    return;
  }

  const newTodo = {
    id: todoList.length + 1,
    task: task,
    completed: false,
  };

  todoList.push(newTodo);
  console.log('Todo added:', newTodo);
}

removeToDoItem(2); // Removes the todo item with ID 2
console.log(todoItems); // Displays the updated todo list

markToDoItemAsCompleted(3); // Marks the todo item with ID 3 as completed
console.log(todoItems); // Displays the updated todo list

deleteToDoItem(1); // Deletes the todo item with ID 1
console.log(todoItems); // Displays the updated todo list

clearCompletedTasks(); // Clears all completed tasks
console.log(todoItems); // Displays the updated todo list