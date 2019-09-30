//local storage
//https://www.youtube.com/watch?v=T9GWHFDcELQ
//


//text decoration
var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
  console.log(event);
  if(event.target.tagName === "LI"){
    event.target.classList.toggle('checked');
  }
}, false);
