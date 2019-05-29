'use strict'



$(document).ready(init);

function init() {
    createBooks();
    renderBooks()
    $('.prevPage').hide();
}


function renderBooks() {
    if (findBooksLength() >= 5) $('.nextPage').show();
    else $('.nextPage').hide();
    var strHtml = '';
    var books = getBooks();


    for (var i = 0; i < books.length; i++) {
        strHtml += `   <tr>
        <th scope="row">${books[i].id}</th>
        <td>${books[i].name}</td>
        <td>$ ${books[i].price}</td>
        <td><img src="${books[i].imgUrl}" alt="" class="img-thumbnail"> </td>
        <td>${books[i].rate}</td>
        <td> <div class="btn-group" role="group" aria-label="Basic example">
        <button  data-trans="read"  type="button" onclick="onOpenModal(${books[i].id})" class="btn btn-secondary">Read</button>
        <button  data-trans="update"  type="button" onclick="readAndUpdateBook (${books[i].id})" class="btn btn-secondary">Update</button>
        <button  data-trans="delete"  type="button" onclick="onDeleteBook( ${books[i].id})" class="btn btn-secondary">Delete</button>
        </div> </td>
    </tr> 
   `

    }
    $('.innerTable').html(strHtml);
    doTrans();
}

function onDeleteBook(bookId) {
    deleteBook(bookId);
    renderBooks();

}



function onOpenAddModal() {
    $('.modalAdd').show();
    renderBooks();
}



function onOpenModal(bookId) {
    var book = findBookById(bookId);
    var strHtml = '';

    strHtml += `  
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${book.name}</h5>
            </div>
            <div class="modal-body">
                <p><span data-trans="price"> Price </span>: $ ${book.price}</p>
                <p><span data-trans="id"> Id </span>: ${book.id}</p>
                <span data-trans="rateAction"> Rate </span>  <p><button onclick="onAddRate(${book.id})"  type="button" class="btn btn-light">+</button> ${book.rate} <button onclick="OnDecreaseRate(${book.id})" type="button" class="btn btn-light">-</button></p>
                <img src=" ${book.imgUrl}" alt="" class="img-thumbnail">

            </div>
            <div class="modal-footer">
              
                <button  data-trans="saveChange"  onclick="onCloseModal()" type="button" class="btn btn-primary">Save changes</button>

            </div>
        </div>
    </div>
</div>`;

    $('.modalInfo').html(strHtml);
    $('.modalInfo').show();
    doTrans();

}

function onCloseModal() {
    $('.modal').hide();
    renderBooks();

}

function onAddRate(bookId) {
    addRate(bookId);
    onOpenModal(bookId)
}

function OnDecreaseRate(bookId) {
    decreaseRate(bookId);
    onOpenModal(bookId)
}

function onSortByName() {
    sortByName();
    renderBooks();
}

function onSortByPrice() {
    sortByPrice();
    renderBooks();
}

function onNextPage() {
    nextPage();
    renderBooks();
    var curPage = findCurrPage();
    if (curPage > 0) $('.prevPage').show();
}

function onPrevPage() {
    prevPage();
    renderBooks();
    var curPage = findCurrPage();
    if (curPage > 0) $('.prevPage').show();
    else $('.prevPage').hide();

}

function clearValueAdd() {
    $('.newBookName').val('');
    $('.newBookPrice').val('');
    $('.newBookImg').val('ie: img/imgName.png');
}

function onAddBook() {
    var newBookName = $('.newBookName').val();
    var newBookPrice = $('.newBookPrice').val();
    var newBookImg = $('.newBookImg').val();
    if (!newBookName || !newBookPrice) {
        alert('Did not fill correctly')
    } else {
        addBook(newBookName, newBookPrice, newBookImg)
        onCloseModal();
        clearValueAdd();
    }
}

function readAndUpdateBook(bookId) {
    var book = findBookById(bookId);
    var strHtml = '';
    strHtml += `  
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${book.name}</h5>
                <button type="button" onclick="onCloseModal()" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
            </div>
            <div class="modal-body">
              
                <div class="form-group">
                            <label data-trans="updatePrice" for="exampleInputPassword1">Update the price</label>
                            <input type="number" class="form-control updateBookPrice" id="exampleInputPassword1" placeholder="${book.price}">
                        </div>
             
                <img src=" ${book.imgUrl}" alt="" class="img-thumbnail">

            </div>
            <div class="modal-footer">
                <button data-trans="close" type="button" onclick="onCloseModal()"  class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button data-trans="saveChange" onclick="updatePrice( ${book.id})" type="button" class="btn btn-primary">Save changes</button>

            </div>
        </div>
    </div>
</div>`;

    $('.modalUpdate').html(strHtml);
    $('.modalUpdate').show();
    doTrans();

}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') {
        document.body.classList.add('rtl');
    } else document.body.classList.remove('rtl');
    doTrans();
}