// padding no-ios
document.addEventListener("DOMContentLoaded", function() {
    let dateItems = document.querySelectorAll('.promotion__date-item');
    let regBtns = document.querySelectorAll('.promotion__regBtn');
    let enterBtns = document.querySelectorAll('.promotion__enterBtn');

    if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
        dateItems.forEach(item => item.classList.add('noios-padding'));
        regBtns.forEach(btn => btn.classList.add('noios-padding'));
        enterBtns.forEach(btn => btn.classList.add('noios-padding'));
    }
});