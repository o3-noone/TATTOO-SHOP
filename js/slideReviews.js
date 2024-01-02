const slider2 = document.querySelector(".Reviews-List");
      const slides2 = document.querySelectorAll(".Reviews-item");
      // Slide width va margin
      const slideWidth = slides2[0].offsetWidth;
      const slideMargin = 20;

      // Yangi elementlar
      const cloneItems = document.querySelectorAll(".clone-item");

      // Slider width hisoblash
      const sliderWidth =
        (slideWidth + slideMargin) * (slides2.length + cloneItems.length);

      // Sliderga qo'shimcha elementlarni qo'shish
      slider2.style.width = sliderWidth + "px";
      slider2.innerHTML += slider2.innerHTML;

      // Timer orqali slider ni otamiz
      let counter = 0;
      const timer = setInterval(() => {
        counter++;
        const translateValue = -counter * (slideWidth + slideMargin) + "px";
        slider2.style.transform = "translateX(" + translateValue + ")";

        if (counter >= slides2.length) {
          setTimeout(() => {
            slider2.style.transition = "none";
            counter = 0;
            slider2.style.transform = "translateX(0)";
          }, 15500);
          setTimeout(() => {
            slider2.style.transition = "transform 0.5s ease";
          }, 15600);
        }
      }, 7000);