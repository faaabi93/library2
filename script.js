const container = document.querySelector(".container")
const addButton = document.querySelector(".addBtn")
let myLibrary = [];

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(new Book("Fabian Baiersdörfer", "Mein Leben Teil 1", 123, true))
addBookToLibrary(new Book("Dieter Busch", "Rentweinsdorf", 1233, true))
addBookToLibrary(new Book("M. Sennefelder", "Ich orgel mir einen rein", 1234, false))

function displayBooks(library) {
    myLibrary.forEach((element, index) => {
        createCard(element, index)
    });
}

function createCard(element, index) {
    let card = document.createElement("div");
    card.setAttribute("data-index", index)
    card.classList.add("element")

    let cardTop = document.createElement("div");
    cardTop.classList.add("cardTop");
    cardTop.innerHTML = `<b>${element.title}</b>`

    let cardBottom = document.createElement("dvi");
    cardBottom.classList.add("cardBottom");

    let p1 = document.createElement("p");
    p1.textContent = `Author: ${element.author}`
    let p2 = document.createElement("p");
    p2.textContent = `Pages: ${element.pages}`
    let p3 = document.createElement("p");
    p3.textContent = (element.isRead) ? "Already read" : "not read yet";

    cardBottom.appendChild(p1);
    cardBottom.appendChild(p2);
    cardBottom.appendChild(p3);

    let readBtn = createButton("readBtn", "btn", "Read", "data-index", index)
    readBtn.addEventListener("click", readBook)
    cardBottom.appendChild(readBtn)

    let delBtn = createButton("delBtn", "btn", "Delete", "data-index", index)
    delBtn.addEventListener("click", removeBook)
    cardBottom.appendChild(delBtn)

    card.appendChild(cardTop)
    card.appendChild(cardBottom)

    container.appendChild(card)
}

function createButton(class1, class2, text, data1, data2) {
    let btn = document.createElement("div");
    btn.classList.add(class1)
    btn.classList.add(class2)
    btn.textContent = text
    btn.setAttribute(data1, data2)
    return btn
}


function deleteCards() {
    container.innerHTML = ""
}

function readBook() {
    myLibrary[this.getAttribute("data-index")].isRead = !myLibrary[this.getAttribute("data-index")].isRead;
    updateView()
}

function removeBook() {
    myLibrary.splice(this.getAttribute("data-index"), 1)
    updateView()
}

function updateView() {
    deleteCards()
    displayBooks()
}

displayBooks()
console.log(myLibrary)