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

const CatalogBoxs=document.querySelector(".Catalog-boxs")
const Catalog=document.querySelector(".Catalog")
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    hideTabContent();
    showTabContent(index);
   if(index==1){
    CatalogBoxs.style.maxWidth="1183px";
    CatalogBoxs.style.width="100%";
   } else{
    CatalogBoxs.style.width="630px";

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
const slides = document.querySelectorAll('.hero-text');
const prevBtn = document.querySelector('.hero-btn-1');
const nextBtn = document.querySelector('.hero-btn-2');
const tabBtn = document.querySelectorAll(".tab-btn");

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    const translateValue = -currentSlide * 100 + '%';
    slides.forEach(slide => {
        slide.style.transform = 'translateY(' + translateValue + ')';
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
    tabBtn.forEach(item => {
        if (item !== clickedItem) {
            item.style.background = "";
        }
    });
}

prevBtn.addEventListener('click', function () {
    prevSlide();
    showBtnBg();
});

nextBtn.addEventListener('click', function () {
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
    tabBtn.forEach((item, i=0) => {
        if (i === currentSlide) {
            item.style.background = "#bb8c5f";
        } else {
            item.style.background = "";
        }
    });
}

showBtnBg()