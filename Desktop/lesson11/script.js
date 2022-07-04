const btn = document.getElementById('btn');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range');
const square = document.getElementById('square');
const circle = document.getElementById('circle');

btn.addEventListener('click', function () {

    let inputVal = document.querySelectorAll('input');
    console.log(inputVal[1].value);

    square.style.backgroundColor = inputVal[1].value;
});

e_btn.style.display = "none";

range.addEventListener('click', function () {

    let inputVal = document.querySelectorAll('input');
    console.log(inputVal[0].value);

    circle.style.width = inputVal[0].value + '%';
    circle.style.height = inputVal[0].value + '%';
    console.log(circle.style.width);
    console.log(circle.style.height);
});