// JavaScript Todo Basics - Har buggar som du behöver fixa!

// STEG 1: Todo-array (fungerar bra)
let todoArray = ['Handla mat', 'Städa rummet', 'Göra läxor'];

// STEG 2: Visa todos-funktion (har problem!)
function visaTodos() {
    const listaElement = document.getElementById('todo-lista');
    let htmlString = '<h3>Mina Todos:</h3>';

    for (let i = 0; i < todoArray.length; i++) {
        htmlString += '<div class="todo-item">';
        htmlString += '<input type="checkbox" onchange="toggleTodo(' + i + ')">';
        htmlString += '<span>' + todoArray[i] + '</span>';
        htmlString += '<button onclick="taBortTodo(' + i + ')">Ta bort</button>';
        htmlString += '</div>';
    }

    listaElement.innerHTML = htmlString;
}

// STEG 3: Lägg till todo (har flera problem!)
function laggTillTodo() {
    const inputElement = document.getElementById('todo-input');
    const nyTodo = inputElement.value.trim();
    
    if (nyTodo === '') {
        alert('Du måste skriva något!');
        return;
    }

    todoArray.push(nyTodo);

     visaTodos();

     inputElement.value = '';

     uppdateraStats();
     uppdateraDebug();
}

function rensaAllaTodos() {
    todoArray = [];
    visaTodos();
    uppdateraStats();
    uppdateraDebug();
}

function taBortTodo(index) {
    todoArray.splice(index, 1);
    visaTodos();
    uppdateraStats();
    uppdateraDebug();
}

function toggleTodo(index) {
    // Implementera "klar/inte klar" funktionalitet
    // Tips: Lägg till en "completed" property till varje todo
}

// STEG 5: Statistik-funktion (saknas!)
// TODO: Skriv denna funktion
function uppdateraStats() {
    const totalElement = document.getElementById('total-count');
    totalElement.textContent = todoArray.length;
}

// STEG 6: Debug-funktion (fungerar)
function uppdateraDebug() {
    document.getElementById('debug-length').textContent = todoArray.length;
    document.getElementById('debug-last').textContent = todoArray[todoArray.length - 1] || 'Ingen';
    document.getElementById('debug-array').textContent = JSON.stringify(todoArray);
}

// STEG 7: Event listeners (bara en fungerar!)
document.getElementById('add-btn').addEventListener('click', laggTillTodo);
document.getElementById('clear-btn').addEventListener('click', rensaAllaTodos);
document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        laggTillTodo();
    }
});

// STEG 8: Initiera appen (stora problem!)
// PROBLEM: Inget händer när sidan laddas!
 visaTodos();
 uppdateraStats();
 uppdateraDebug();

// TESTOMRÅDE
console.log('Todo app laddad!');
console.log('PROBLEM: Listan visas inte!');
console.log('PROBLEM: "Lägg till" fungerar inte ordentligt!');
console.log('PROBLEM: Inga delete-knappar fungerar!');
console.log('Öppna Console och testa: todoArray');
