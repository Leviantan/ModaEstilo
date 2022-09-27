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
    'Cartagena', 'images/img1.jpg', 4, 500000, null);

const post2 = new Post(12345, 'Cartagena', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img2.jpg', 4, 500000, null);
const post3 = new Post(12345, 'Cartagena', '27/08/2022',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam psa in facilis',
    'Cartagena', 'images/img3.jpg', 4, 500000, null);


const container1 = document.querySelector('#card-container');

console.log(post1.cardHTML());
container1.innerHTML = post1.cardHTML();