function myFunction() {
    let list_text = document.getElementById("item_input").value
    if (list_text == ""){
      console.log("text not entered");
      return;
    }
    let list = document.getElementById("todo_List");
    let li = document.createElement('li');

    li.innerText = list_text;
    li.addEventListener("click",function list_strikethrough(){ this.style.textDecoration = "line-through"});
    list.appendChild(li);
    console.log("submit button clicked");
    document.getElementById('item_input').value = '';
}