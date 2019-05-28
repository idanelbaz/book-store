'use strict'

var gBooks;
const PAGE_SIZE = 4;
var gCurrPageIdx = 0;
var gDefImg = `img/defualt.jpg`;

function createBooks() {
    gBooks = loadFromStorage('books');
    if (!gBooks)
        gBooks = [createBook(1, 'New Day', 50, `img/new-day.png`), createBook(2, 'War & Peace', 99, `img/war&peace.png`), createBook(3, 'Wealth of Nations', 80, `img/wealth.png`)]

}

function createBook(id, name, price, img) {
    return {
        id: id,
        name: name,
        price: price,
        imgUrl: img,
        rate: 0,
    }
}

function deleteBook(bookId) {
    gBooks.splice(bookId - 1, 1);
    saveToStorage('books', gBooks);
}

function addNewBook(newBookName, newBookPrice, img = gDefImg) {
    gBooks.push(createBook((gBooks.length + 1), newBookName, newBookPrice, img));
    saveToStorage('books', gBooks);
}

function updateBook(bookId, bookPrice) {
    var book = findBookById(bookId);
    book.price = bookPrice;
    saveToStorage('books', gBooks);

}

function addRate(bookId) {
    var book = findBookById(bookId);
    if (book.rate <= 8 && book.rate < 10)
        book.rate++;
    saveToStorage('books', gBooks);
}

function decreaseRate(bookId) {
    var book = findBookById(bookId);
    if (book.rate >= 1)
        book.rate--;
    saveToStorage('books', gBooks);
}

function addBook(newBookName, newBookPrice, newBookImg = gDefImg) {
    gBooks.push(createBook((gBooks.length + 1), newBookName, newBookPrice, newBookImg));
    saveToStorage('books', gBooks);
}

function sortByName() {
    gBooks.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }


        return 0;
    });
}

function sortByPrice() {
    gBooks.sort(function(a, b) {
        var nameA = a.price;
        var nameB = b.price;
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }


        return 0;
    });
}

function nextPage() {
    gCurrPageIdx++;
}

function prevPage() {
    gCurrPageIdx--;
}

function getBooks() {
    var fromIdx = gCurrPageIdx * PAGE_SIZE;
    var books = gBooks.slice(fromIdx, fromIdx + PAGE_SIZE);
    return books;
}