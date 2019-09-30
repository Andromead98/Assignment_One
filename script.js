// adding items local storage
//https://www.youtube.com/watch?v=T9GWHFDcELQ
//https://www.youtube.com/watch?v=AfVUiQ-my4Q

const submit = document.querySelector('.create-button');
const taskList = document.querySelector('.the-ul-list');
const taskInput = document.querySelector('.the-input-class');

function template(data){
  taskList.insertAdjacentHTML("beforeend", `
  <ul id="the-ul" class="the-ul-list">
    <li id="the-li" class="task">${data.task}<span class ="close">x</span></li>
  </ul>`);

}


function appendTask(event){
  const data = {
    task: taskInput.value,
  }

  event.preventDefault();

  //if comment value is smaller than 1, submit will not work
  if (taskInput.value.length < 1) return;

  template(data);

  taskInput.value ="";

  // saving the tasks to localStorage
  localStorage.setItem('taskItems', taskList.innerHTML)

}

submit.addEventListener('click', appendTask, false);

const saved = localStorage.getItem('taskItems');
console.log('it worked');

if (saved) {
  taskList.innerHTML = saved;
}

// removing items from local storage

//text decoration
var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
  console.log(event);
  if(event.target.tagName === "LI"){
    event.target.classList.toggle('checked');
  }
}, false);
