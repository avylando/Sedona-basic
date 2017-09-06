// Окно поиска гостиницы

var popup = document.querySelector(".modal-search");
var searching = document.querySelector(".open-form");
var searchButton = popup.querySelector(".search-button");
var close = popup.querySelector(".modal-close");

var arrivalDate = popup.querySelector(".arrival-date");
var departureDate = popup.querySelector(".departure-date");
var adultsNumber = popup.querySelector(".adults-number");
var kidsNumber = popup.querySelector(".kids-number");

var storageA = localStorage.getItem("adultsNumber");
var storageK = localStorage.getItem("kidsNumber");

 
searching.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-close");   
    arrivalDate.focus();

    if (storageA) {
        adultsNumber.value = storageA;
    } 
    
    if (storageK) {
        kidsNumber.value = storageK;
    }
})

searchButton.addEventListener ("click", function (evt) {
    if (!arrivalDate.value || !departureDate.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
        console.log("Введите даты въезда/выезда");
    } else {
        popup.classList.remove("modal-error");
        localStorage.setItem("adultsNumber", adultsNumber.value);
        localStorage.setItem("kidsNumber", kidsNumber.value);
    }
})
