// adding items local storage
//https://www.youtube.com/watch?v=T9GWHFDcELQ
//https://www.youtube.com/watch?v=AfVUiQ-my4Q

const submit = document.querySelector('.create-button');
const taskList = document.querySelector('.the-ul-list');
const taskInput = document.querySelector('.the-input-class');

/**
* Display data in the list
* @param {Object} data The item we want to display
* @param {String} data.task The task text to display
**/
function displayTask(data){
  taskList.insertAdjacentHTML("beforeend", `
  <ul id="the-ul" class="the-ul-list">
    <li id="the-li" class="task">${data.task}<span class ="close">x</span></li>
  </ul>`);

}

/**
* Event listener to append a task to the list
* @param {ClickEvent} event ClickEvent when add task is clicked
**/
function appendTask(event){
  event.preventDefault();

  //if comment value is smaller than 1, submit will not work
  if (taskInput.value.length < 1) {
    return;
  }
//calls for the information
  const data = {
    task: taskInput.value,
  }
//prints the task at the end of the list
  displayTask(data);

  taskInput.value ="";

  // saving the tasks to localStorage
  let dataList = JSON.parse(localStorage.getItem('taskItems'));
  if(!dataList || !Array.isArray(dataList)) {
    dataList = [];
  }
  //adds tasks to the array
  dataList.push(data);

  localStorage.setItem('taskItems', JSON.stringify(dataList));
}

/**
* Load task list from local storage and display in list
**/
function loadDataList() {
  const dataList = JSON.parse(localStorage.getItem('taskItems'));
  if(!dataList || !Array.isArray(dataList)) {
    return;
  }

  dataList.forEach(function(item) {
    displayTask(item);
  });
}
//listens to when the button is clicked so that the task is added to the list
submit.addEventListener('click', appendTask, false);
//calls the previous function
loadDataList();


// removing items from local storage

//text decoration
var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
  console.log(event);
  if(event.target.tagName === "LI"){
    event.target.classList.toggle('checked');
  }
}, false);
