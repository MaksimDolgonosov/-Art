const sliders = (slides, dir, prev, next) => {
    const allSlides = document.querySelectorAll(slides);
    let paused;

    let sliderPosition = 0;

    function showSlider(n) {
        if (sliderPosition > allSlides.length - 1) {
            sliderPosition = 0;
        }
        if (sliderPosition < 0) {
            sliderPosition = allSlides.length - 1;
        }
        allSlides.forEach(slide => {
            slide.style.display = "none";
            slide.classList.add("animated");
        });
        allSlides[sliderPosition].style.display = "block";

    }

    showSlider(sliderPosition);

    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener("click", () => {
            sliderPosition--;
            showSlider(sliderPosition);
            allSlides[sliderPosition].classList.remove("slideInLeft");
            allSlides[sliderPosition].classList.add("slideInRight");
        });
        nextBtn.addEventListener("click", () => {
            sliderPosition++;
            showSlider(sliderPosition);
            allSlides[sliderPosition].classList.remove("slideInRight");
            allSlides[sliderPosition].classList.add("slideInLeft");
        });
    } catch (error) {

    }



    function activateAnimation() {
        if (dir === "vertical") {
            paused = setInterval(function () {
                sliderPosition++;
                showSlider(sliderPosition);
                allSlides[sliderPosition].classList.add("slideInDown");
            }, 3000);
        } else {
            paused = setInterval(function () {
                sliderPosition++;
                showSlider(sliderPosition);
                allSlides[sliderPosition].classList.remove("slideInRight");
                allSlides[sliderPosition].classList.add("slideInLeft");
            }, 3000);
        }
    }
    activateAnimation();
    allSlides[0].parentElement.addEventListener("mouseenter", () => {
        clearInterval(paused);
    });
    allSlides[0].parentElement.addEventListener("mouseleave", () => {
        activateAnimation();
    });

};
export default sliders;
