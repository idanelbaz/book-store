var gTrans = {
    add: {
        en: 'Add Book',
        es: 'Añadir libro',
        he: 'הוסף ספר'
    },
    id: {
        en: 'Id',
        es: 'Id',
        he: 'מספור',
    },
    name: {
        en: 'Name',
        es: 'Nombre',
        he: 'שם',
    },
    price: {
        en: 'Price',
        es: 'Precio',
        he: 'מחיר'
    },
    rate: {
        en: 'Rate',
        es: 'Tarifa',
        he: 'דירוג',
    },
    actions: {
        en: 'Actions',
        es: 'Acción',
        he: 'פעולות',
    },
    read: {
        en: 'Read',
        es: 'Leer',
        he: 'קרא',
    },
    update: {
        en: 'Update',
        es: 'Actualizar',
        he: 'עדכן',
    },
    delete: {
        en: 'Delete',
        es: 'Borrar',
        he: 'מחק',
    },
    bookName: {
        en: '*Book Name',
        es: '*Nombre del libro',
        he: 'שם הספר*',
    },
    bookPrice: {
        en: '*Book Price',
        es: '*Precio del libro',
        he: 'מחיר הספר*'
    },
    bookImage: {
        en: 'Book Image',
        es: 'Imagen del libro',
        he: 'התמונה של הספר'
    },
    mustFill: {
        en: '*Must fill',
        es: '*Debe llenar',
        he: 'חובה למלא*'
    },
    nextPage: {
        en: 'Next page',
        es: 'siguiente página',
        he: 'עמוד הבא'
    },
    previousPage: {
        en: 'previous page',
        es: 'pagina anterior',
        he: 'עמוד קודם'
    },
    saveChange: {
        en: 'Save changes',
        es: 'guardar cambios',
        he: 'שמור שינויים'
    },
    close: {
        en: 'Close',
        es: 'cerrar',
        he: 'סגור'
    },
    updatePrice: {
        en: 'Update the price',
        es: 'Actualizar el precio',
        he: 'עדכן את המחיר'
    },
    rateAction: {
        en: 'Rate',
        es: 'Tarifa',
        he: 'דרג'
    },
    title: {
        en: 'Book Store Manager',
        es: 'Gerente de tienda de libros',
        he: 'ניהול חנות ספרים'
    },
    choose: {
        en: 'Choose language',
        es: 'Elige lengua',
        he: 'בחר שפה'
    }



}

var gCurrLang = 'en';

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');

    for (var i = 0; i < els.length; i++) {
        console.log(i)
        var el = els[i];
        // var transKey = el.getAttribute('data-trans');
        var transKey = el.dataset.trans;

        var txt = getTrans(transKey);

        // Translating is actually complex and needs a library
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt);
        } else {
            el.innerText = txt;
        }
    }
}


function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang];

    // If not found - use english
    if (!txt) txt = keyTrans['en'];

    return txt;
}


function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    return new Intl.NumberFormat('he', { style: 'currency', currency: 'ILS' }).format(num);
}

function formatDate(time) {

    var options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}


function kmToMiles(km) {
    return km / 1.609;
}