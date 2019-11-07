

function openNav() {
    // document.getElementById('nav').style.width = '250px';
    let nav = document.getElementById('nav')
    nav.classList.add('nav')
}

function closeNav() {
    let nav = document.getElementById('nav');
    nav.classList.remove('nav');
}

document.addEventListener('DOMContentLoaded', () => {
     renderCards(profiles);
})


function renderCards(profiles) {
    Object.entries(profiles.profile).map(([key, value]) => {
        let name = value.name;
        let img = value.img;
        let cardsContainer = document.getElementById('cards-container');
        let card = document.createElement("div");
        card.className = 'card';
        let cardImg = document.createElement("div");
        cardImg.className = 'card-img';
        cardImg.style.background = `url(${img})`;
        let cardName = document.createElement('div');
        cardName.className = 'card-name';
        let cardText = document.createTextNode(name);
        cardName.appendChild(cardText);
        card.appendChild(cardImg)
        card.appendChild(cardName)
        cardsContainer.appendChild(card)
        card.addEventListener('click', function(){bigCard(img, name)})
    })
}

function bigCard(img, name){
    console.log(img, name)
    let popupContainer = document.getElementById('popup-container')
    let popup = document.getElementById('popup');
    let popupImg = document.getElementById('popup-img');
    popupContainer.style.display = "flex";
    popup.style.transform = "scale(1)";
    popupImg.style.background = `url(${img})`
}


function popUpClose(){
    document.getElementById('popup-container').style.display = 'none'
}