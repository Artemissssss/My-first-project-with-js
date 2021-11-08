let width = document.body.clientWidth;
let newWidth = (width - 200).toString() + 'px';

console.log(newWidth)

let i = 0;

function onClickSlide() {
    document.body.classList.toggle('show-nav');
    document.body.classList.toggle('width-second-position');
    document.querySelector('header').classList.toggle('border-active');
    if (i == 0) {
        document.querySelector('header').style.width = newWidth;
        document.querySelector('main').style.width = newWidth;
        document.querySelector('body').style.width = newWidth;
        i++;
    } else if (i == 1) {
        document.querySelector('header').style.width = width.toString() + 'px';
        document.querySelector('main').style.width = width.toString() + 'px';
        document.querySelector('body').style.width = width.toString() + 'px';
        i--;
    }
}
// //!Урок ============= не для чего===========
// function min(a,b,c){
// if(a<b && a <c){
//     return a;
// }
// else if(b<a && b<c){
//     return b;
// }else{
//     return c;
// }
// }
// alert(min(10,-1,6));
//Todo================
// let array = [];
// for (let i = 0; i <= 7; i++) {
//     array.unshift('#');
//     console.log(array.join(''));
// }
//Todo================
//шахматная доска из # 8x8
//# #
// # 
// let array = [];
// let a = 0;
// for (let i = 0; i < 8; i++) {
//     if (a == 0) {
//         if (array.length < 7) {
//             for (let m = 0; m < 4; m++) {
//                 array.unshift(' ')
//                 array.unshift('#')
//             }
//         }
//         a++;
//     } else if (a == 1) {
//         if (array.length < 7) {
//             for (let m = 0; m < 4; m++) {
//                 array.unshift('#')
//                 array.unshift(' ')
//             }
//         }
//         a--;
//     }
//     console.log(array.splice('').join(''))

// }
//todo=====================================
//Вести суму зарплати 
//Премію додати 15%
//Віднімаємо 10% податків
//190 -
//залишок ділимо на 2
// function moneyCalculatorForMonth (a){
//     let i =((a/100*115)/100*90-190)/2;
//     return i ;  
// }
// let mon = prompt(`You salary?`,``);
// alert(`${moneyCalculatorForMonth(mon)}grn left.`)

//todo=====================================
// function sum(a,b,c){
// if(a+b+c <0){
// return "-";
// }else{
// return "+";
// }
// }
// alert(sum(-10,5,-2))
//todo=====================================

//!========================================
//?========================================
document.querySelector("#reg1").addEventListener("click", onAllClick)
document.querySelector("#reg2").addEventListener("click", onAllClick)
// function formReg() {
// document.querySelector("#reg").classList.toggle("sec-reg-st");
// document.querySelector('body').classList.toggle("back");
// }
function onAllClick(){
    document.querySelector("#reg").classList.toggle("sec-reg-st");
    document.querySelector('body').classList.toggle("back");
}
    let i = 0;
    let txt = "_Hello it is future!"
    let txtArray = txt.split("");
    let speed = 500;
     setInterval(function typing(){
      
         if(i < txtArray.length){
         document.getElementById("name").textContent += txt[i]
         i++
      }else{
         if(i < txtArray.length*2){
           document.getElementById("name").textContent =document.getElementById("text2").textContent.substring(0, document.getElementById("text2").textContent.length - 1);
       i++;
         }else{
           i = 0;
         }
       }
     },100)
