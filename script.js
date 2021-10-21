let width = document.body.clientWidth;
let newWidth = (width - 200).toString() + 'px';

console.log(newWidth)

let i = 0;
function onClickSlide() {
    document.body.classList.toggle('show-nav');
    document.body.classList.toggle('width-second-position');
    if (i == 0) {
        document.querySelector('header').style.width = newWidth;
        document.querySelector('main').style.width = newWidth;
        document.querySelector('body').style.width = newWidth;
        i++;
    } else if (i ==1) {
        document.querySelector('header').style.width = width.toString()+'px';
        document.querySelector('main').style.width = width.toString()+'px';
        document.querySelector('body').style.width = width.toString()+'px';
        i--;
    }
}