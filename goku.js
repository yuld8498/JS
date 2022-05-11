// let getgo = null;
// getgo = document.getElementById("goku");
// function moveEvent(evt){
//     switch (evt.keyCode) {
//         case 37:
//             goLeft();
//             break;
//         case 39:
//             goRight();
//             break;
//         case 38:
//             goUp();
//             break;
//         case 40:
//             goDown();
//             break;
//     }
// }
// function init(){
//     getgo = document.getElementById("goku");
//     getgo.style.position="relative";
//     getgo.style.left="0px";
//     getgo.style.right="0px";
//     getgo.style.top="0px";
//     getgo.style.bottom="0px";
// }
// function upArrowPressed() {
//     let element = document.getElementById("goku");
//     element.style.top = parseInt(element.style.top) - 5 + 'px';
// }
// function downArrowPressed() {
//     var element = document.getElementById("goku");
//     element.style.top = parseInt(element.style.top) + 5 + 'px';
// }
// function leftArrowPressed() {
//     var element = document.getElementById("goku");
//     element.style.left = parseInt(element.style.left) - 5 + 'px';
// }
// function rightArrowPressed() {
//     var element = document.getElementById("goku");
//     element.style.left = parseInt(element.style.left) + 5 + 'px';

// }
// function docReady() {
//     window.addEventListener('keydown', moveEvent);
// }
function upArrowPressed() {
    let element = document.getElementById("goku");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("goku");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("goku");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("goku");
    element.style.left = parseInt(element.style.left) + 5 + 'px';

}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
window.onload=docReady;