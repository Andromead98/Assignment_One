//local storage
//https://www.youtube.com/watch?v=T9GWHFDcELQ
//https://www.youtube.com/watch?v=AfVUiQ-my4Q

const submit = document.querySelector('.create-button');
const taskList = document.querySelector('.the-ul-list');
const taskInput = document.querySelector('.the-input-class');

function template(data){
  taskList.insertAdjacentHTML("beforeend", `
  <ul id="the-ul" class="the-ul-list">
    <li id="the-li" class="task">${data.task}</li>
  </ul>`);

}


function appendTask(event){
  const data = {
    task: taskInput.value,
  }

  event.preventDefault();

  template(data)

}

submit.addEventListener('click', appendTask, false);


//text decoration
var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
  console.log(event);
  if(event.target.tagName === "LI"){
    event.target.classList.toggle('checked');
  }
}, false);
