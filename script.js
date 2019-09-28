//indexedDB?
//https://www.youtube.com/watch?v=vb7fkBeblcw
//
window.indexedDB = window.indexedDB || window.mozIndexDB || window.webkitIndexedDB || window.msIndexedDB;
/* if (!window.indexedDB) {
  alert();
} */

const request = indexedDB.open("tasks-lists");

request.onupgradeneeded = e => {
  alert("upgrade is called")
}

request.onsuccess = e => {
  alert("success is called")
}

request.onerror = e => {
  alert("error")
}

//adding new lists & local storage
//https://www.youtube.com/watch?v=W7FaYfuwu70&t=830s
const ListsContainer = document.querySelector('[data-lists]')



//hamburger Menu
const OpenMenu = document.getElementsByClassName('SlideMenuOpen');
for (i=0; i<OpenMenu.length; i++) {
  OpenMenu[i].addEventListener('click', openSlideMenu);
}

function openSlideMenu(){
  document.getElementById('menu').style.width = '400px';
  document.getElementById('list-of-lists').style.marginLeft ='400px';
}

const CloseMenu = document.getElementsByClassName('SlideMenuClose');
for (i=0; i<CloseMenu.length; i++){
  CloseMenu[i].addEventListener('click', closeSlideMenu);
}

function closeSlideMenu(){
  document.getElementById('menu').style.width = '0';
  document.getElementById('list-of-lists').style.marginLeft ='0';
}

//list tag stuff
var myList = document.getElementsByTagName('li');
var index;
for (index = 0; index < myList.length; index++){
  var aSpanTag = document.createElement("SPAN");
  var someTxt = document.createTextNode("\u00D7");
  aSpanTag.className = "close";
  aSpanTag.appendChild(someTxt);
  myList[index].appendChild(aSpanTag);
}
//creating close button for lists not created with main function

var closeButton = document.getElementsByClassName("close");

for (i = 0; i < closeButton.length; i++){
  closeButton[i].addEventListener('click', function(){
    var theDiv = this.parentElement;
    theDiv.style.display = "none";
  })
}

//
var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
  console.log(event);
  if(event.target.tagName === "LI"){
    event.target.classList.toggle('checked');
  }
}, false);

//
const CreateTask = document.getElementsByClassName('create-button');
for (i=0; i<CreateTask.length; i++){
  CreateTask[i].addEventListener('click', createNewElement)
}


function createNewElement(){
  var li = document.createElement('li');
  var theInputValue = document.getElementById("the-input").value;
  var textNode = document.createTextNode(theInputValue);
  li.appendChild(textNode);

  if (theInputValue === ''){
    alert("This Field can not be left empty")
  } else {
    document.getElementById("the-ul").appendChild(li);
  }

  document.getElementById("the-input").value = "";

  var thePanTag = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  thePanTag.className = "close";
  thePanTag.appendChild(txt);
  li.appendChild(thePanTag);

  for (i = 0; i < closeButton.length; i++){
    console.log()
    closeButton[i].addEventListener('click', function(){
      var theDiv = this.parentElement;
      theDiv.style.display = "none";
    })
  }
}
