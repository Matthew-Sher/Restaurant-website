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