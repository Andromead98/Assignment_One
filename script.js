
//hamburger Menu
function openSlideMenu(){
  document.getElementById('menu').style.width = '400px';
  document.getElementById('list-of-lists').style.marginLeft ='400px';
}

function closeSlideMenu(){
  document.getElementById('menu').style.width = '0';
  document.getElementById('list-of-lists').style.marginLeft ='0';
}

//adding new lists & local storage
//https://www.youtube.com/watch?v=W7FaYfuwu70&t=830s
const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists =[{
  id: 1,
  name: 'name'
}, {
  id: 2,
  name:'todo'
}]

newListForm.addEventListener('submit', event =>{
  event.preventDefault()
  const listName = newListInput.value
  if (listName == null || listName ==='') return
  const list =createList(listName)
  newListInput.value = null
})

//function createList(name){
  //{id: Date.now().toString(), name: name, tasks:[]}
//}

function render(){
  clearElement(listsContainer)
  lists.forEach(list =>{
    const ListElement = document.createElement('li')
    listElement.dataset.listId = list.id
    ListElement.classList.add("otherLists")
    ListElement.innerText = list.name
    listsContainer.appendChild(ListElement)
  })
}

function clearElement(){
  while(element.firstChild){
    element.removeChild(element.firstChild)
  }

}

render()

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
  closeButton[i].onclick = function(){
    var theDiv = this.parentElement;
    theDiv.style.display = "none";
  }
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
        closeButton[i].onclick = function(){
            var theDiv = this.parentElement;
            theDiv.style.display = "none";
        }
    }
}

//create new lists
