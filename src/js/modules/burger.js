const burger = (btnSelector, burgerSelector) => {
    const btnBurger = document.querySelector(btnSelector);
    const burgerMenu = document.querySelector(burgerSelector);

    btnBurger.addEventListener("click", () => {
        if (window.screen.availWidth < 993 && burgerMenu.style.display == "none") {
            burgerMenu.style.display = "block";
        } else {
            burgerMenu.style.display = "none";
        }
    });
    window.addEventListener("resize", () => {
        if (window.screen.availWidth > 992) {
            burgerMenu.style.display = "none";
        }
    });

};
export default burger; 