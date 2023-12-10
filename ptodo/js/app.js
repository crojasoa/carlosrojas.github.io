// Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const show_count = document.getElementById('show-count');
let count = 0;
let countToShow = 0;
//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event){
    let task = todoInput.value;
    event.preventDefault();
    todoList.innerHTML += `<div id="item-${count}" class="todo">
                            <li class="todo-item">${task}</li>
                            <button onclick="deleteItem(${count})" 
                            class="button-del button"><i class="delete-ico far fa-trash-alt"></i></button>
                            <button onclick="toggleCheck(${count})" class="button"><i class="checked-ico far fa-square"></i>
                            </button>
                           </div>`;
    todoInput.value = '';
    count++;
    countToShow++;
    show_count.innerHTML = countToShow;
}
function deleteItem(itemToDelete){
    let item = document.getElementById(`item-${itemToDelete}`);
    item.style.transform = 'rotate(10deg) translateY(2rem)';
    item.style.opacity = '0';
    setTimeout(function(){ item.remove();}, 1000);
    countToShow--;
    show_count.innerHTML = countToShow;    
}
function toggleCheck(itemToToggle){
    let isChecked = document.getElementById(`item-${itemToToggle}`).lastElementChild.firstChild ;
    let wichStyle = isChecked.classList[2] ;
    let changeClass = isChecked.classList;
    if(wichStyle == 'fa-square'){
        changeClass.remove('fa-square');
        changeClass.add('fa-check-square');
    } else {
        changeClass.remove('fa-check-square');
        changeClass.add('fa-square');
    }
}
show_count.innerHTML = countToShow;
