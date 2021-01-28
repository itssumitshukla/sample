const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event lsiteners
loadEventListeners();

//Load all event listenrs
function loadEventListeners() {
  //Create DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear Task
  clearBtn.addEventListener('click', clearTasks);
  //Filter Task Event
  filter.addEventListener('keyup', filterTasks);
};

//Get Tasks From LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    //create li element
    const li = document.createElement('li');
    //add Class
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-times" ></i>'
    li.appendChild(link);
    taskList.appendChild(li);
  })

};

// //Add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('ADD A TASK')
  }

  //create li element
  const li = document.createElement('li');
  //add Class
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fas fa-times" ></i>'
  li.appendChild(link);
  taskList.appendChild(li);
  //Store in Local Storage
  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = '';

  e.preventDefault();
};

//Local Storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks.JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};


//Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
    
    //Remove from ls
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
};

//Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks',JSON.stringify(tasks));

}

//Clear Task”
function clearTasks() {
  taskList.innerHTML = '';
};

//Filter Tasks
function filterTasks(e) {
  let text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    let item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
}