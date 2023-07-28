let movies = [
  {
    name: "Falcon and the Winter Soldier",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni",
    images: "./images/slider 2.png"
  },
  {
    name: "Loki",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni",
    images: "./images/slider 1.png"
  },
  {
    name: "Wanda Vision",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni",
    images: "./images/slider 3.png"
  },
  {
    name: "Raya and the Last Dragon",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni",
    images: "./images/slider 4.png"
  },
  {
    name: "Luca",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni",
    images: "./images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let sliderIndex = 0;

const createSlider = () => {
  if (sliderIndex >= movies.length) {
    sliderIndex = 0;
  }

  let slider = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[sliderIndex].name));
  p.appendChild(document.createTextNode(movies[sliderIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slider.appendChild(imgElement);
  carousel.appendChild(slider);

  imgElement.src = movies[sliderIndex].images;
  sliderIndex++;

  slider.className = "slider";
  content.className = "slider-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  if (slider.length) {
    slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${
      30 * (slider.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlider();
}

setInterval(() => {
  createSlider();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
