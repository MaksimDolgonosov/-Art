const modal = () => {
    function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(`.${modalSelector}`);
        const close = modal.querySelector(`.${closeSelector}`);
        const allModals = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();


        trigger.forEach(element => {
            if (element.target) {
                element.preventDefault();
            }

            element.addEventListener("click", () => {

                allModals.forEach(item => {
                    item.style.display = "none";
                    document.body.style.overflow = "";
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
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
            document.querySelector(`.${selector}`).style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
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
    bindModals(".button-design", "popup-design", "popup-close");
    bindModals(".button-consultation", "popup-consultation", "popup-close");
    showModalByTime("popup-consultation", 60000);
};

export default modal;