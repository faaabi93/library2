let myLibrary = []
const content = document.querySelector(".content")
const addBtn = document.getElementById("addBook")
const addBtn2= document.getElementById("addBook2")
const modal = document.querySelector(".modal")
const closeBtn = document.getElementById("closeBtn")

addBtn.addEventListener("click", showModal)
closeBtn.addEventListener("click", closeModal)
window.addEventListener("click", closeModalTwo)
addBtn2.addEventListener("click", addBook)

function showModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none"
}

function closeModalTwo(event) {
    if(event.target == modal) {
        closeModal()
    }
}

function addBook(event) {
    let tem
}

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function addBookToPage(book) {
    let readStatus = book.isRead ? "Already read" : "not read";

    let cardDiv = document.createElement("div");
    let nameDiv = document.createElement("div");
    let pageDiv = document.createElement("div");
    let readDiv = document.createElement("div");
    let deleBtn = document.createElement("div");
    let readBtn = document.createElement("div");

    cardDiv.classList.add("card");
    nameDiv.classList.add("flex-1", "card-content");
    pageDiv.classList.add("flex-2", "card-content");
    readDiv.classList.add("flex-2", "card-content");
    readBtn.classList.add("button", "green-button");
    deleBtn.classList.add("button", "red-button");

    nameDiv.textContent = `${book.author}: ${book.title}`
    pageDiv.textContent = `${book.pages} Pages`
    readDiv.textContent = readStatus
    readBtn.textContent = "mark as read"
    deleBtn.textContent = "delete"

    cardDiv.appendChild(nameDiv);
    cardDiv.appendChild(pageDiv);
    cardDiv.appendChild(readDiv);
    cardDiv.appendChild(readBtn);
    cardDiv.appendChild(readBtn);
    cardDiv.appendChild(deleBtn);

    content.appendChild(cardDiv)
}

addBookToPage(new Book("Meine coole Biographie", "Fabian Baiersdörfer", 125, true))
addBookToPage(new Book("Sachen über mich", "Dieter Busch", 1689, true))
addBookToPage(new Book("ADBV Bier um 11", "Fabian Baiersdörfer", 5, false))