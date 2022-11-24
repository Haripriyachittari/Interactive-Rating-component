const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const numberRating = document.getElementById('number-rating');
const rateCard=document.querySelector('.rate');
const thanksCard=document.querySelector('.thanks');


 function submitRating()
{
   thanksCard.classList.remove('hidden');
   rateCard.classList.add('hidden')
}

one.addEventListener('click', () => {
    numberRating.innerHTML = 1;
})
two.addEventListener('click', () => {
    numberRating.innerText = 2;
})
three.addEventListener('click', () => {
    numberRating.innerText = 3;
})
four.addEventListener('click', () => {
    numberRating.innerText = 4;
})
five.addEventListener('click', () => {
    numberRating.innerText = 5;
})