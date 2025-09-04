// JavaScript Todo Basics - Har buggar som du behöver fixa!

// STEG 1: Todo-array (fungerar bra)
let todoArray = [  
  { uppgift: "Handla mat", completed: false},
  { uppgift: "Städa rummet", completed: false},
  { uppgift: "Göra läxor", completed: false},
];

function sparaTodos(){
    localStorage.setItem("todos", JSON.stringify(todoArray));
}

// STEG 2: Visa todos-funktion (har problem!)
function visaTodos() {
    const listaElement = document.getElementById('todo-lista');
    let htmlString = '<h3>Mina Todos:</h3>';
    
    for (let i = 0; i < todoArray.length; i++) {
        htmlString += '<div class="todo-item">';
        const completed = todoArray[i].completed ? 'checked' : '';
        htmlString += '<input type="checkbox" onchange="toggleTodo(' + i + ')" ' + completed + '>';
        htmlString += '<span>' + todoArray[i].uppgift + '</span>';
        htmlString += '<button onclick="taBortTodo(' + i + ')">Ta bort</button>';
        htmlString += '</div>';
    }
    
    listaElement.innerHTML = htmlString;
}

// STEG 3: Lägg till todo (har flera problem!)
function laggTillTodo() {
    const inputElement = document.getElementById('todo-input');
    const nyTodoUppgift = inputElement.value.trim();
    
    if (nyTodoUppgift === '') {
        alert('Du måste skriva något!');
        return;
    }

    const todoObjekt = {
        uppgift: nyTodoUppgift,
        completed: false
    };

    todoArray.push(todoObjekt);
    sparaTodos();
     visaTodos();

     inputElement.value = '';

     uppdateraStats();
     uppdateraDebug();
}

function rensaAllaTodos() {
    todoArray = [];
    sparaTodos();
    visaTodos();
    uppdateraStats();
    uppdateraDebug();
}

function taBortTodo(index) {
    todoArray.splice(index, 1);
    sparaTodos();
    visaTodos();
    uppdateraStats();
    uppdateraDebug();
}

function toggleTodo(index) {
    todoArray[index].completed = !todoArray[index].completed;
    sparaTodos();
    uppdateraDebug();
}

function uppdateraStats() {
    const totalElement = document.getElementById('total-count');
    totalElement.textContent = todoArray.length;
}

function uppdateraDebug() {
    document.getElementById('debug-length').textContent = todoArray.length;
    document.getElementById('debug-last').textContent = todoArray[todoArray.length - 1].uppgift || 'Ingen';
    document.getElementById('debug-array').textContent = JSON.stringify(todoArray);
}

document.getElementById('add-btn').addEventListener('click', laggTillTodo);
document.getElementById('clear-btn').addEventListener('click', rensaAllaTodos);
document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        laggTillTodo();
    }
});

let sparadeTodos = localStorage.getItem("todos");
if(sparadeTodos){
    todoArray = JSON.parse(sparadeTodos);
}

sparaTodos();
 visaTodos();
 uppdateraStats();
 uppdateraDebug();

// TESTOMRÅDE
console.log('Todo app laddad!');
console.log('PROBLEM: Listan visas inte!');
console.log('PROBLEM: "Lägg till" fungerar inte ordentligt!');
console.log('PROBLEM: Inga delete-knappar fungerar!');
console.log('Öppna Console och testa: todoArray');
