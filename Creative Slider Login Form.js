// Declaring Variable.
var button = document.querySelectorAll('span.btn');
var container = document.querySelector('.container');
var styles = document.querySelector('.style');
var result = document.querySelector('#result');
var FirstName = document.getElementById('FirstName');
var LastName = document.getElementById('LastName');
var Email = document.getElementById('email');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var tag = document.querySelectorAll('.tag');
var placeholder = document.querySelectorAll('.placeholder');
var count = 0;
var scroll = 0;

container.setAttribute('style', 'transition: .5s; translateX(-' + scroll + 'vw)');
styles.setAttribute('style', 'transition: .5s;');
function init() {
    button.forEach(btn => {
        btn.addEventListener('click', () => {
            scroll += 100;
            container.style.transform = 'translateX(-' + scroll + 'vw)';
            count += 25;
            styles.style.width = count + '%';
        })
    });
}
init()
button[3].onclick = function () {
    var firstNameValue = FirstName.value;
    result.innerHTML = 'Welcome, ' + firstNameValue + '';
    for (let i = 0; i < 30; i++) {
        var ripples = document.createElement('span');
        ripples.classList.add('ripples');
        var ranW = (Math.floor(Math.random() * 150) + 20);
        var ranT = (Math.floor(Math.random() * 100) + 100);
        styles.appendChild(ripples);
        ripples.setAttribute(
            'style',
            '--i: ' + ranT+ '; position: absolute; bottom: -' + 100 + 'vh; left: ' + (Math.floor(Math.random() * 100)) + 'vw; width: ' + ranW + 'px; height: ' + ranW + 'px; background: rgb(255, 255, 255, .3); transform: rotateZ(' + (Math.floor(Math.random() * 100) - 50) + 'deg); animation: ripples 7s linear '+i+'s infinite;'
        );
    }
}

Email.addEventListener('keyup', () => {
    var eVal = Email.value;
    if (eVal.match(pattern)) {
        Email.style.border = '2px solid lime';
    } else {
        Email.style.border = '2px solid red';
    }
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 9) {
        stopTab(e)
    }
});

function stopTab(e) {
    e.preventDefault();
    scroll += 100;
    container.style.transform = 'translateX(-' + scroll + 'vw)';
    count += 25;
    styles.style.width = count + '%';
}