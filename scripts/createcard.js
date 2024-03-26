const preview = document.getElementById("preview");

preview.addEventListener('click', () => {
    document.querySelector('.title-text').textContent = document.getElementById('title').value;
    document.querySelector('.subtitle-text').textContent = document.getElementById('subtitle').value;
    document.querySelector('.to-text').textContent = document.getElementById('to').value;
    document.querySelector('.message-text').textContent = document.getElementById('message').value;
    document.querySelector('.from-text').textContent = document.getElementById('from').value;
});

const save = document.getElementById("submit");

save.addEventListener('click', () => {
    if (localStorage.getItem("cards") == null || localStorage.getItem("cards") == "") {
        var cards = [];
        localStorage.setItem("cards", cards);
    } else {
        var cards = JSON.parse(localStorage.getItem("cards"));
    }
    var currCard = new Object();
    currCard.to = document.getElementById('to').value;
    currCard.from = document.getElementById('from').value;
    currCard.title = "title", document.getElementById('title').value;
    currCard.subtitle = "subtitle", document.getElementById('subtitle').value;
    currCard.message = "message", document.getElementById('message').value;
    cards.push(currCard);
    localStorage.setItem("cards", JSON.stringify(cards));
});