const baza = [
  {
    id: 1,
    name: "Foxxx Kitsune Mini Black Vintage RCA",
    type: "new",
    images: "/images/bg/item1.png",
    price: "6 000 ₽",
  },
  {
    id: 2,
    name: "Foxxx Viper Fox Golden Vintage Lot #1 RCA",
    type: "new",
    images: "/images/bg/item2.png",
    price: "8 730 ₽",
  },
  {
    id: 3,
    name: "Нитровиниловые перчатки Wally Plastic S",
    type: "new",
    images: "/images/bg/item3.png",
    price: "20 ₽",
  },
  {
    id: 4,
    name: "Forever Cartridge Grip Ergo 30 mm Огненно-Рыжий",
    type: "new",
    images: "/images/bg/item4.png",
    price: "2 037 ₽",
  },
  {
    id: 5,
    name: "Verge Direct 2.1 Pink gip EGO 4 mm liners",
    type: "new",
    images: "/images/bg/item5.png",
    price: "2 037 ₽",
  },
  {
    id: 6,
    name: "Deuce Machines Direct Drive #7 RCA Samurai",
    type: "new",
    images: "/images/bg/item6.png",
    price: "8 000 ₽",
  },
  {
    id: 7,
    name: "Cyborg Machines Alter Rotary Axis Cross Sexy Nymph",
    type: "new",
    images: "/images/bg/item7.png",
    price: "11 000 ₽",
  },
  {
    id: 8,
    name: "Verge Direct 2.1 Gunmetal",
    type: "new",
    images: "/images/bg/item8.png",
    price: "10 900 ₽",
  },
];

const tabs = document.querySelectorAll(".Catalog-box-btn");
const tabsContent = document.querySelectorAll(".Catalog-items");
function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add("deActiveCatalog");
    item.classList.remove("activeCatalog");
  });

  tabs.forEach((item, i) => {
    item.classList.remove("activeText");
  });
}

function showTabContent(i = 0) {
  tabsContent.forEach((item) => {
    item.classList.add("deActiveCatalog");
    item.classList.remove("activeCatalog");
  });
  tabs.forEach((item) => {
    item.classList.remove("activeText");
  });

  tabs[i].classList.add("activeText");
  tabsContent[i].classList.add("activeCatalog");
  tabsContent[i].classList.remove("deActiveCatalog");
}

hideTabContent();
showTabContent();

const CatalogBoxs = document.querySelector(".Catalog-boxs");
const Catalog = document.querySelector(".Catalog");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    hideTabContent();
    showTabContent(index);
    if (index == 1) {
      CatalogBoxs.style.maxWidth = "1183px";
      CatalogBoxs.style.width = "100%";
    } else {
      CatalogBoxs.style.width = "630px";
    }
  });
});
document.querySelector(".Catalog").addEventListener("click", function () {
  if (CatalogBoxs.style.display !== "block") {
    CatalogBoxs.style.display = "block";
  } else {
    CatalogBoxs.style.display = "none";
  }
});
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-text");
const prevBtn = document.querySelector(".hero-btn-1");
const nextBtn = document.querySelector(".hero-btn-2");
const tabBtn = document.querySelectorAll(".tab-btn");

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  const translateValue = -currentSlide * 100 + "%";
  slides.forEach((slide) => {
    slide.style.transform = "translateY(" + translateValue + ")";
  });
}

tabBtn.forEach((item, idx) => {
  item.addEventListener("click", function () {
    hideBtnBG(item);
    item.style.background = "#bb8c5f";
    showSlide(idx);
    showBtnBg();
  });
});

function hideBtnBG(clickedItem) {
  tabBtn.forEach((item) => {
    if (item !== clickedItem) {
      item.style.background = "";
    }
  });
}

prevBtn.addEventListener("click", function () {
  prevSlide();
  showBtnBg();
});

nextBtn.addEventListener("click", function () {
  nextSlide();
  showBtnBg();
});

function prevSlide() {
  showSlide(currentSlide - 1);
  hideBtnBG();
}

function nextSlide() {
  showSlide(currentSlide + 1);
  hideBtnBG();
}

function showBtnBg() {
  tabBtn.forEach((item, i = 0) => {
    if (i === currentSlide) {
      item.style.background = "#bb8c5f";
    } else {
      item.style.background = "";
    }
  });
}

showBtnBg();

const CardListXit = document.querySelector(".Card-List-xit");
const CardListPopular = document.querySelector(".Card-List-popular");
const CardListNew = document.querySelector(".Card-List-new");
const CardListAktsiya = document.querySelector(".Card-List-aktsiya");
function addXit(baza) {
  const Card = baza;
  loadCard(CardListXit, Card);
}
addXit(baza);
function addPopular(baza) {
  const Card = baza.sort((a, b) => b.id - a.id);
  loadCard(CardListPopular, Card);
}
addPopular(baza);
function extractNumericPrice(price) {
  return parseFloat(price.replace(/[^\d.]/g, ''));
}
function addNew(baza) {
  const Card = baza.sort((a, b) => extractNumericPrice(a.price) - extractNumericPrice(b.price));
  loadCard(CardListNew, Card);
}
addNew(baza);
function addAktsiya(baza) {
  const Card = baza.sort((a, b) => extractNumericPrice(b.price) - extractNumericPrice(a.price));
  loadCard(CardListAktsiya, Card);
}
addAktsiya(baza);
function loadCard(list, Card) {
  const data = Card.map((item) => {
    return `
      <div class="Card-item">
        <div class="Card-item-top" style="background: url(${item.images})">
          <p>Новинка</p>
          <div class="top-btns-hero">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>
        <div class="item-imgs-btn">
          <span class="imgs-btn activeSpan"></span>
          <span class="imgs-btn"></span>
          <span class="imgs-btn"></span>
          <span class="imgs-btn"></span>
        </div>
        <div class="Card-item-name">
          <h4>${item.name}</h4>
        </div>
        <div class="Card-item-price">
          <h4>${item.price}</h4>
        </div>
        <div class="Card-item-btn">Добавить в корзину</div>
      </div>
    `;
  }).join("");

  list.innerHTML = data;

  const heartBtn1 = document.querySelectorAll(".fa-regular.fa-heart");
  const heartBtn2 = document.querySelectorAll(".fa-solid.fa-heart");

  heartBtn1.forEach((item) => {
    item.addEventListener("click", function () {
      item.style.display = "none";
      item.nextElementSibling.style.display = "block";
    });
  });

  heartBtn2.forEach((item) => {
    item.addEventListener("click", function () {
      item.style.display = "none";
      item.previousElementSibling.style.display = "block";
    });
  });
}

const CardTabs = document.querySelectorAll(".Card-top-item");
const CardContent = document.querySelectorAll(".Card-List");
function hideCardContent() {
  CardContent.forEach((item) => {
    item.classList.add("deactiveCard");
    item.classList.remove("activeCard");
  });

  CardTabs.forEach((item, i) => {
    item.classList.remove("Card-active");
  });
}

function showCardContent(i = 0) {
  CardContent.forEach((item) => {
    item.classList.add("deactiveCard");
    item.classList.remove("activeCard");
  });

  CardTabs.forEach((item) => {
    item.classList.remove("Card-active");
  });

  CardTabs[i].classList.add("Card-active");

  CardContent[i].classList.add("activeCard");
  CardContent[i].classList.remove("deactiveCard");
}

hideCardContent();
showCardContent();

CardTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    hideCardContent();
    showCardContent(index);
  });
});
