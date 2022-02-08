const modal = () => {
    let btnPressed = false;
    const scroll = calcScroll();
    function bindModals(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(`.${modalSelector}`);
        const close = modal.querySelector(`.${closeSelector}`);
        const allModals = document.querySelectorAll('[data-modal]');



        trigger.forEach(element => {
            if (element.target) {
                element.preventDefault();
            }

            element.addEventListener("click", () => {
                btnPressed = true;

                allModals.forEach(item => {
                    item.style.display = "none";
                    document.body.style.overflow = "";
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
                if (destroy) {
                    element.remove();
                }
            });
        });

        close.addEventListener("click", (e) => {
            if (e.target && e.target.classList.contains(closeSelector)) {
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });

        modal.addEventListener("click", e => {
            if (e.target && e.target.classList.contains(modalSelector)) {
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });

    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            let ifAnyModalShow = false;
            document.querySelectorAll('[data-modal]').forEach(element => {
                if (window.getComputedStyle(element).display !== "none") {
                    ifAnyModalShow = true;
                }
            });
            if (!ifAnyModalShow) {
                document.querySelector(`.${selector}`).style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function scrollToTheEnd() {
        window.addEventListener("scroll", () => {

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                bindModals(".fixed-gift", "popup-gift", "popup-close", true);
                //document.querySelector(selector).click();
            }
        });
    }
    bindModals(".button-design", "popup-design", "popup-close");
    bindModals(".button-consultation", "popup-consultation", "popup-close");
    bindModals(".fixed-gift", "popup-gift", "popup-close", true);

    scrollToTheEnd(".fixed-gift");
    //showModalByTime("popup-consultation", 5000);
};

export default modal;