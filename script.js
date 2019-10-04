// adding items local storage
//https://www.youtube.com/watch?v=T9GWHFDcELQ
//https://www.youtube.com/watch?v=AfVUiQ-my4Q
// asked a question on stacked overflow, can be viewed here: https://stackoverflow.com/questions/58166237/how-to-remove-single-value-from-localstorage-that-has-same-key-as-another-value/58177805?noredirect=1#comment102736477_58177805

const submit = document.querySelector('.create-button');
const taskList = document.querySelector('.the-ul-list');
const taskInput = document.querySelector('.the-input-class');

/**
* Display data in the list
* @param {Object} data The item we want to display
* @param {String} data.task The task text to display
**/
function displayTask(data){
  const task = data.task;
  // fudge the id with a semi-unique value. This should be properly set when the task is saveds
  const id = data.task.replace(/\W/g, '')

  taskList.insertAdjacentHTML("beforeend", `
    <li id="task${id}" data-task=${id} class="task"><span>${data.task}</span><button class="close" id="btn${id}">x</button></li>
  `);

  const closeBtn = document.querySelector(`#task${id} button`);
  console.log('closebtn', closeBtn);

  closeBtn.addEventListener('click', (evt) => removeTaskFromStorage(evt));
//  closeBtn.addEventListener('click', removeTaskFromStorage);

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

/* Artifact from earlier button creation. DELETE ME
var myList = document.getElementsByTagName('li');
var index;
for (index = 0; index < myList.length; index++){
}
*/
/*
// removing items from local storage
//https://stackoverflow.com/questions/33357900/remove-an-element-from-array-with-user-input
//https://salesforce.stackexchange.com/questions/144941/how-to-remove-item-from-localstorage
//close button code
var closeButton = document.getElementsByClassName("close");
for (i = 0; i < closeButton.length; i++){
  console.log('Iterate', i);
  console.log('Close button', closeButton[i]);
  closeButton[i].addEventListener('click', function(evt) {
    console.log('index', i);
    const target = evt.target;
    var theDiv = target.parentElement;
    theDiv.style.display = "none";
    removeTaskFromStorage(removeTask);
  });
}
*/

//const dataList = JSON.parse(localStorage.getItem('taskItems'));
//console.log(dataList);
//
var removeTaskFromStorage = function(evt){
  evt.preventDefault();
  const clicked = evt.target;
  const id = clicked.parentNode.dataset.task;
  if(!id) {
    console.error('Unable to identify task to remove');
    return;
  }

  const dataList = JSON.parse(localStorage.getItem('taskItems'));
  var removeTaskIndex = dataList.findIndex((task) => task.task.replace(/\W/g === id));
  if (removeTaskIndex > -1){
    dataList.splice(removeTaskIndex, 1);
    // update in localstorage
    // set item to json sring of dataList
    localStorage.setItem('taskItems',JSON.stringify(dataList));
    // update the display items
    loadDataList()
  }
}
/* dataList.indexOf('{!task.ID}');
if (removeTask > -1){
  dataList.splice(removeTask, 1);
  localStorage['Tasks'] = ;
}

/*function removeTask(){
  //call data
  const dataList = JSON.parse(localStorage.getItem('taskItems'));
  //check if array is being pulled
  console.log(dataList);
  //click event to remove item from Array
  // looked at this: https://stackoverflow.com/questions/36888969/how-to-delete-an-array-element-stored-in-local-storage
  // and this: https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem

  //this code removes the task from the list, but not the array.
  //need to add something that removes item from array
  //
  var closeButton = document.getElementsByClassName("close");

  for (i = 0; i < closeButton.length; i++){
    closeButton[i].addEventListener('click', function(){
      var theDiv = this.parentElement;
      theDiv.style.display = "none";
    })
  }



}
*/


//text decoration
/*
var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
  console.log(event);
  if(event.target.tagName === "LI"){
    event.target.classList.toggle('checked');
  }
}, false);
*/
