const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Asus ROG Strix G15 (2022)",
    price: 979,
    colors: [
      {
        code: "green",
        img: "strix-g-2022-green.png",
      },
      {
        code: "pink",
        img: "strix-g-2022-pink.png",
      },
    ],
  },
  {
    id: 2,
    title: "ROG Phone 6",
    price: 499,
    colors: [
      {
        code: "black",
        img: "asus.jpg",
      },
      {
        code: "white",
        img: "asuss.png",
      },
    ],
  },
  {
    id: 3,
    title: "ASUS Swift 360Hz",
    price: 110,
    colors: [
      {
        code: "lightgray",
        img: "813vWZW8V0L.jpg",
      },
      {
        code: "black",
        img: "pg259qn-04.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "ASUS ROG STRIX Z390-E",
    price: 273,
    colors: [
      {
        code: "black",
        img: "40500_4064_ASUS-ROG-STRIX-Z390-E.png",
      },
      {
        code: "lightgray",
        img: "asus-rog-strix-z790-a-gaming-wifi-ii-atx-mainboard-sockel-17-005.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "ROG Strix Scope NX TKL Deluxe",
    price: 149,
    colors: [
      {
        code: "black",
        img: "E4226A67-3087-4FC0-B16E-7C7AAFDAB7D6.png",
      },
      {
        code: "gray",
        img: "strix-scope-tkl-ml_1-550x550.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});