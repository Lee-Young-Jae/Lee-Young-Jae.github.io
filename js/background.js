const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"    
];

const randImg = images[(Math.floor(Math.random() * images.length))];

const bgImage = document.createElement("img");

bgImage.src = `img/${randImg}`;


document.body.appendChild(bgImage);