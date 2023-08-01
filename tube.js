let menu = document.querySelector('.menu-btn');
let links = document.querySelector('.links');
let scale = false;
menu.addEventListener('click', function () {
    if (scale) {
        links.style.transform = 'scaleY(0)'
        scale = false;
    }
    else {
        links.style.transform = 'scaleY(1)'
        scale = true
    }
})


