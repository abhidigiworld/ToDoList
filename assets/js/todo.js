//to do list
const formsubmit=document.querySelector(".todo");
const input=document.querySelector(".todo input[type=\"text\"]");
const ul=document.querySelector(".todolist");
formsubmit.addEventListener("submit",function(e){
    e.preventDefault();
    if(!input.value){
        alert("Type something")
    }
  else { const Entervalue=input.value;
    const linew=document.createElement("li");
   
    const news=linew.textContent=`${Entervalue}
    <div class="btn">
        <button class="todo_btn done">DONE</button>
        <button class="todo_btn delete">DELETE</button>
    </div>`;
    linew.innerHTML=news;
     linew.classList.add("todo_item");
    ul.append(linew);
    input.value="";}
})

ul.addEventListener("click",function(some){
    if (some.target.classList.contains("done")){
        some.target.parentNode.parentNode.style.textDecoration="line-through";
    };
   if (some.target.classList.contains("delete")){
        some.target.parentNode.parentNode.remove();
    }
})