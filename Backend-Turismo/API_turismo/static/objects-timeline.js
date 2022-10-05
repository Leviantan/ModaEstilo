const containerTL = document.querySelector('#container-timeline');

containerTL.innerHTML = fillContainer(8);

///post click
const cards = document.querySelectorAll('.card');

const post = document.querySelector('#container-post');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        post.innerHTML = postsList[i].postHTML();
    })
}

