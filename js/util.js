'use strict'



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function findBookIDById(bookid) {
    var bookIdx = gBooks.findIndex(function(book) {
        return book.id === bookid;
    })

    return bookIdx;
}

function findBookById(bookid) {
    var book = gBooks.find(function(book) {
        return book.id === bookid;
    })

    return book;
}

function findBooksLength() {
    var length = gBooks.length;

    return length;
}

function findCurrPage() {
    return gCurrPageIdx;
}

function saveToStorage(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}