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
