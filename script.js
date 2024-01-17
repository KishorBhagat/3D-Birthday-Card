const card = document.querySelector('.card');
const imgBox = document.querySelector('.img-box');
const details = document.querySelector('.details');

let isOpen = false;

function animateCard() {
    if(isOpen){
        card.style.transform = "rotate(-5deg)"
        imgBox.style.transform = "rotateY(-160deg)"
        details.style.transform = "rotateY(-20deg)"
    }
    else {
        card.style.transform = "rotate(0deg) translateX(-25%)"
        imgBox.style.transform = "rotateY(0deg)"
        details.style.transform = "rotateY(0deg)"
    }
}

imgBox.addEventListener('click', () => {
    isOpen = !isOpen
    animateCard()
})

details.addEventListener('click', () => {
    isOpen = !isOpen
    animateCard()
})