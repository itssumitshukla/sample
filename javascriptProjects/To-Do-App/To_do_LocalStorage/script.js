const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event lsiteners
loadEventListeners();

//Load all event listenrs
function loadEventListeners() {
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
}

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

  taskInput.value = '';

  e.preventDefault();
};

//Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
    console.log('YOOO')
  }
}