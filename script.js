"use strict";

const upperscreen = document.getElementById('upperscreen');
const lowerscreen = document.getElementById('lowerscreen');
const clear = document.getElementById('clear');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const minus = document.getElementById('minus');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const plus = document.getElementById('plus');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

zero.addEventListener('click', function() {
    if(lowerscreen.innerHTML != '') {
        pushNumber('0');
    }
});
one.addEventListener('click', function() { pushNumber('1') });
two.addEventListener('click', function() { pushNumber('2') });
three.addEventListener('click', function() { pushNumber('3') });
four.addEventListener('click', function() { pushNumber('4') });
five.addEventListener('click', function() { pushNumber('5') });
six.addEventListener('click', function() { pushNumber('6') });
seven.addEventListener('click', function() { pushNumber('7') });
eight.addEventListener('click', function() { pushNumber('8') });
nine.addEventListener('click', function() { pushNumber('9') });
decimal.addEventListener('click', function() { pushNumber('.') });

function pushNumber(num) {
    let str = lowerscreen.innerHTML;
    str += num;
    lowerscreen.innerHTML = str;
}

plus.addEventListener('click', function() { pushSymbol(' + ') });
minus.addEventListener('click', function() { pushSymbol(' - ') });
multiply.addEventListener('click', function() { pushSymbol(' * ') });
divide.addEventListener('click', function() { pushSymbol(' / ') });

function pushSymbol(symb) {
    let str = lowerscreen.innerHTML;
    str += symb;
    upperscreen.innerHTML += str;
    lowerscreen.innerHTML = "";
}

equals.addEventListener('click', function() {
    upperscreen.innerHTML += lowerscreen.innerHTML;
    lowerscreen.innerHTML = eval(upperscreen.innerHTML);
    upperscreen.innerHTML = '';
});

clear.addEventListener('click', function() {
    lowerscreen.innerHTML = '';
    upperscreen.innerHTML = '';
});