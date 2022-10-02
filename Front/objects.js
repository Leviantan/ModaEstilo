const post1 = new Post(12345, 'Cartagena', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img1.jpg', 4, 500000, null);
const post2 = new Post(12346, 'Santa Marta', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img2.jpg', 4, 500000, null);
const post3 = new Post(12347, 'Hostal Pepito', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img3.jpg', 4, 500000, null);
const post4 = new Post(12347, 'Hostal Pepito', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img4.jpg', 4, 500000, null);
const post5 = new Post(12347, 'Hostal Pepito', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img5.jpg', 4, 500000, null);
const post6 = new Post(12347, 'Hostal Pepito', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img6.jpg', 4, 500000, null);
const post7 = new Post(12347, 'Hostal Pepito', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img7.jpg', 4, 500000, null);
const post8 = new Post(12347, 'Hostal Pepita', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img8.jpg', 4, 500000, null);

const postsList = [post1, post2, post3, post4, post5, post6, post7];
postsList.push(post8);

const container1 = document.querySelector('#card-container');


function fillContainer(numPost) {
    let cards = '';
    for (let i = 0; i < numPost; i++) {
        cards += postsList[i].cardHTML();
    }
    return cards;
}

container1.innerHTML = fillContainer(3);