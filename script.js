let myLibrary = []

const content = document.querySelector(".content")
const addBtn = document.getElementById("addBook")
const addBtn2= document.getElementById("addBook2")
const modal = document.querySelector(".modal")
const closeBtn = document.getElementById("closeBtn")
const form = document.getElementById("form")
let id_counter = 0;

addBtn.addEventListener("click", showModal)
closeBtn.addEventListener("click", closeModal)
window.addEventListener("click", closeModalTwo)
addBtn2.addEventListener("click", addBook)

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.id = id_counter;
    id_counter++;
}

function showModal() {
    modal.style.display = "block";
}

function closeModal() {
    form.reset()
    modal.style.display = "none"
}

function closeModalTwo(event) {
    if(event.target == modal) {
        closeModal()
        form.reset()
    }
}

function addBook(event) {
    const book_title = document.getElementById("title").value
    const book_author = document.getElementById("author").value
    const book_pages = document.getElementById("pages").value
    const book_isRead = document.getElementById("isRead").checked

    if(book_title === "" || book_author === "" || book_pages === "") {
        return;
    }

    let book = new Book(book_title, book_author, book_pages, book_isRead);

    addBookToLibrary(book);
    addBookToPage(book);
    closeModal()
}


function addBookToLibrary(book) {
    myLibrary.push(book)
}

function removeBookFromLibrary(id) {
    myLibrary.forEach((book) => {
        if(book.id === id) {
            myLibrary.splice(myLibrary.indexOf(book), 1)
        }
        console.log(myLibrary)
    })
}

function changeReadStatus(id) {
    myLibrary.forEach((book) => {
        if(book.id === id) {
            book.isRead = !book.isRead
        }
    })
}

function getReadStatus(id) {
    let status = undefined
    myLibrary.forEach((book) => {
        if(book.id === id) {
            status = book.isRead;
        }
    })
    return status
}


function addBookToPage(book) {
    let readStatus = book.isRead ? "Already read" : "not read";

    let cardDiv = document.createElement("div");
    let nameDiv = document.createElement("div");
    let pageDiv = document.createElement("div");
    let readDiv = document.createElement("div");
    let deleBtn = document.createElement("div");
    let readBtn = document.createElement("div");

    deleBtn.dataset.id = book.id;
    readBtn.dataset.id = book.id;

    cardDiv.classList.add("card");
    nameDiv.classList.add("flex-1", "card-content");
    pageDiv.classList.add("flex-2", "card-content");
    readDiv.classList.add("flex-2", "card-content");
    readBtn.classList.add("button", "green-button");
    deleBtn.classList.add("button", "red-button");

    nameDiv.textContent = `${book.author}: ${book.title}`
    pageDiv.textContent = `${book.pages} Pages`
    readDiv.textContent = readStatus
    readBtn.textContent = "change status"
    deleBtn.textContent = "delete"

    readBtn.addEventListener("click", (e) => {
        let tmp_id = Number(e.target.dataset.id);
        changeReadStatus(tmp_id)
        e.target.parentElement.childNodes[2].textContent = getReadStatus(tmp_id) ? "Already read" : "not read"
    })

    deleBtn.addEventListener("click", (e) => {
        removeBookFromLibrary(Number(e.target.dataset.id))
        e.target.parentElement.remove()
    })

    cardDiv.appendChild(nameDiv);
    cardDiv.appendChild(pageDiv);
    cardDiv.appendChild(readDiv);
    cardDiv.appendChild(readBtn);
    cardDiv.appendChild(readBtn);
    cardDiv.appendChild(deleBtn);

    content.appendChild(cardDiv)
}
