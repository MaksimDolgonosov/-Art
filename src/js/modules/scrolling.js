const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add("animated", "fadeIn");
            upElem.classList.remove("fadeOut");
        } else {
            upElem.classList.add("fadeOut");
            upElem.classList.remove("fadeIn");
        }
    });


    upElem.addEventListener("click", (e) => {
        e.preventDefault();
        requestAnimationFrame(myAnimation);
        //document.documentElement.scrollTop = 1500;
    });
    let pos = document.documentElement.scrollTop;
    function myAnimation() {
        if (pos > 0) {
            pos--;
            document.documentElement.scrollTop = pos;
            requestAnimationFrame(myAnimation);


           
        }
    }

};

export default scrolling;