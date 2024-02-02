let input = document.querySelector(".input");
let handleListeDiv = document.getElementById("handlelisteDiv");

let handleListe = [];

function addToList() {
    handleListe.push(input.value);
    showList();
    input.value="";
}

showList();

function showList() {
    handleListeDiv.innerHTML = "";
    for (let i = 0; i < handleListe.length; i++) {
        handleListeDiv.innerHTML += /*HTML*/ `
        <h3>${handleListe[i]}</h3>
        <input type="checkbox">
        <button onclick="deleteItem(${i})">🗑️</button>
        <button onclick="changeItem(${i})">↩️</button>
        `
    }
}

function deleteItem(item) {
    handleListe.splice(item, 1)
    showList();
}

function changeItem(item) {
    handleListe[item] = input.value;
    showList();
    input.value = ""
}


