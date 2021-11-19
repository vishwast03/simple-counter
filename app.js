const countValue = document.querySelector('.count');
const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');
const increaseBtn = document.querySelector('.increase-btn');

let count = 0;

decreaseBtn.addEventListener('click', () => {
    count--;
    updateValue();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateValue();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateValue();
});

function updateValue() {
    countValue.textContent = count;
    if(count < 0) {
        countValue.style.color = "red";
    }
    else if(count > 0) {
        countValue.style.color = "green";
    }
    else {
        countValue.style.color = "var(--color-primary)";
    }
}