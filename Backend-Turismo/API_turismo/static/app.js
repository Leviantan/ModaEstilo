class User {
    constructor(id, name, pass, email, country, city, genre, age, avatar) {
        this.id = id;
        this.name = name;
        this.pass = pass;
        this.email = email;
        this.country = country;
        this.city = city;
        this.genre = genre;
        this.age = age;
        this.avatar = avatar;
    }
}

class Post {
    constructor(id, title, date, content, city, photo, rating, budget, userPostKeys) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.content = content;
        this.city = city;
        this.photo = photo;
        this.rating = rating;
        this.budget = budget;
        this.userPostKeys = userPostKeys;
    }

    cardHTML() {
        const { id, title, date, content, city, photo, rating, budget, userPostKeys } = this;

        const stringCard = `<div class="col-sm-6 col-md-4">
                                <div class="card mt-3">
                                    <img src="${photo}" class="card-image-top" alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">${content}
                                        </p>
                                        <p class="card-text text-muted"> Editado el ${date} </p>
                                    </div>
                                </div>
                            </div>`;

        return stringCard;
    }

    postHTML() {
        const { id, title, date, content, city, photo, rating, budget, userPostKeys } = this;

        let ratingStars = '';
        for (let i = 0; i < 5; i++) {
            if (i + 1 <= rating) ratingStars += '<img src="images/star-solid.svg">';
            else ratingStars += '<img src="images/star-regular.svg">'
        }

        const stringPost = `<div class="row border border-2 rounded p-3 m-5 mt-0">
                                <div class="col-md-6">
                                    <img src="${photo}" alt="" class="img-fluid img-thumbnail">
                                </div>
                                <div class="col-md-6">
                                    <h2>${title} <span class="badge text-bg-primary rounded-pill">${city}</span></h2>
                                    <p style="color: gray;">Editado ${date}<p>
                                    <hr>
                                    <p>${content}</p>
                                    <hr>
                                    <h5>Presupuesto: <span>${budget}</span></h5>
                                    <hr>
                                    <div class="text-center">
                                        <span class="star">${ratingStars}</span>
                                    </div>
                                </div>
                            </div>`
        return stringPost;
    }
}

class Comments {
    constructor(id, comment, commentUserKey, commentPostKey) {
        this.id = id;
        this.comment = comment;
        this.commentUserKey = commentUserKey;
        this.commentPostKey = commentPostKey;
    }
}

const post1 = new Post(12345, 'Cartagena', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img1.jpg', 4, 600.000, null);
const post2 = new Post(12346, 'Santa Marta', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img2.jpg', 4, 600000, null);
const post3 = new Post(12347, 'Hostal Pepito', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img3.jpg', 4, 30000, null);
const post4 = new Post(12347, 'Valle del Cocorá', '29/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img4.jpg', 4, 500000, null);
const post5 = new Post(12347, 'Hostal Pepito', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img5.jpg', 4, 500000, null);
const post6 = new Post(12347, 'Hostal Pepito', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img6.jpg', 4, 50000, null);
const post7 = new Post(12347, 'Hostal Pepito', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img7.jpg', 4, 500000, null);
const post8 = new Post(12347, 'Hostal Pepita', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img8.jpg', 4, 500000, null);

const postsList = [post1, post2, post3, post4, post5, post6, post7, post8];

function fillContainer(numPost) {
    let cardString = '';
    for (let i = 0; i < numPost; i++) {
        cardString += postsList[i].cardHTML();
    }
    return cardString;
}

