const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;
document.body.appendChild(bgImage); //js에만 존재하는걸 html로 이동, append-가장뒤/prepend가장위
