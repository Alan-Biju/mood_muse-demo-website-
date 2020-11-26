var ham =document.querySelector('.ham');
var items=document.querySelector('.ham_items');
console.log("fdgdf")
ham.addEventListener('click', ()=>{
  if(items.style.display == "flex"){
    items.style.display = "none";
  }
  else{
    items.style.display = "flex";
  }
});

