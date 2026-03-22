//------------------ Guests counter----------------------
let guestIncreaseButton = document.getElementById('guest-increase-button');
let guestDecreaseButton = document.getElementById('guest-decrease-button');
let guestsCounter = document.getElementById('guests-count');

guestDecreaseButton.addEventListener('click', () => {
    let currentGuestsValue = parseInt(guestsCounter.value);
    if (currentGuestsValue === 0) {
        alert('Количество гостей не может быть отрицательным');
    } else {
        guestsCounter.setAttribute('value', currentGuestsValue - 1);
    }
});

guestIncreaseButton.addEventListener('click', () => {
    let currentGuestsValue = parseInt(guestsCounter.value);
    guestsCounter.setAttribute('value', currentGuestsValue + 1);
});

//---------------------date picker------------------------------
let datePicker = document.getElementById('date-selector');

datePicker.addEventListener('click', () => {
    let calendar = document.getElementById('calendar');
    if (calendar.classList.contains('invisible')) {
        calendar.classList.remove('invisible');
        calendar.classList.add('visible');
    } else {
        calendar.classList.remove('visible');
        calendar.classList.add('invisible');
    }
});

//-------------------form data collectior--------------------

const form = document.querySelector('#booking-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let values = Object.fromEntries(formData.entries());
    console.log(values);  //----for test only
    //----There will be a POST query when the server is ready----
});