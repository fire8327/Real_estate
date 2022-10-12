/*jshint esnext: true */
let defaultTransform = 0;
        function goNext() {
            defaultTransform = defaultTransform - 398;
            var slider = document.getElementById("slider");
            if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
            slider.style.transform = "translateX(" + defaultTransform + "px)";
        }
        next.addEventListener("click", goNext);
        function goPrev() {
            var slider = document.getElementById("slider");
            if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
            else defaultTransform = defaultTransform + 398;
            slider.style.transform = "translateX(" + defaultTransform + "px)";
        }
        prev.addEventListener("click", goPrev);
        function goNext2() {
            defaultTransform = defaultTransform - 398;
            var slider2 = document.getElementById("slider2");
            if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
            slider2.style.transform = "translateX(" + defaultTransform + "px)";
        }
        next2.addEventListener("click", goNext2);
        function goPrev2() {
            var slider2 = document.getElementById("slider2");
            if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
            else defaultTransform = defaultTransform + 398;
            slider2.style.transform = "translateX(" + defaultTransform + "px)";
        }
        prev2.addEventListener("click", goPrev2);

        const swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 13,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,   
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
              },     
            navigation: {
                nextEl: ".swiper-button-next"            
              },

            breakpoints: {            
                768: {
                  slidesPerView: 5,   
                  spaceBetween: 17,           
                },  
    
                449: {
                  slidesPerView: 4,   
    
                },    
            }        
          });