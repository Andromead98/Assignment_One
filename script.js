//adding new lists & local storage
//https://www.youtube.com/watch?v=W7FaYfuwu70&t=830s
const ListsContainer = document.querySelector('[data-lists]')

var lists = []





//hamburger Menu
function openSlideMenu(){
  document.getElementById('menu').style.width = '400px';
  document.getElementById('list-of-lists').style.marginLeft ='400px';
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
