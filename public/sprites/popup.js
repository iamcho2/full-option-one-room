const o0 = document.getElementById("open0");
const o1 = document.getElementById("open1");
const o2 = document.getElementById("open2");
const modal = document.getElementsByClassName("modal");
const overlay = document.getElementsByClassName("modal_overlay");
function open(i){
    modal[i].classList.remove("hidden");
}
function close(i){
    overlay[i].addEventListener("click", function(){
    modal[i].classList.add("hidden");
    })
}
function wBtn(event) {
    switch(event.target.id){
    case 'open0':
        open(0);
        close(0);
        break;
    case 'open1':
        open(1);
        close(1);
        break;
    case 'open2':
        open(2);
        close(2);
        break;
    }
}
o0.addEventListener('click', wBtn);
o1.addEventListener('click', wBtn);
o2.addEventListener('click', wBtn);