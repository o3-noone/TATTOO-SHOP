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
