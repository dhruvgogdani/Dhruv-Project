// const addTask = document.getElementById("addTask");
// const taskInput = document.getElementById('taskInput');
// const taskList = document.getElementById('taskList');


// function addTaskbtn(event) {
//     event.preventDefault();

//     const taskInput = document.getElementById("taskInput").value = ''
//     const taskList = document.getElementById('taskList');

//     // document.getElementById("taskInput").value = '';
// }





// function get() {
    
// }

// const addbtn = document.getElementById("addTask");


// addbtn.addEventListener(function add(e) {
    
    
// })
document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    // Get the task value from the input field
    const taskValue = taskInput.value.trim();
    
    if (taskValue !== '') {
      // Create a new list item element
      const newTask = document.createElement('li');
      newTask.textContent = taskValue;
      
      // Append the new task to the task list
      taskList.appendChild(newTask);
      
      // Clear the input field after adding the task
      taskInput.value = '';
    }
  });