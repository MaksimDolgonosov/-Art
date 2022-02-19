const accordion = (triggerSelector) => {
    let btnTrigger = document.querySelectorAll(triggerSelector);





    btnTrigger.forEach(e => {
        e.addEventListener("click", function () {
            if (this.classList.contains("active-style") || this.nextElementSibling.classList.contains("active-content")) {
                this.classList.remove("active-style");
                this.nextElementSibling.classList.remove("active-content");
                //this.nextElementSibling.style.maxHeight = "0px";

            } else {
                this.classList.add("active-style");
                this.nextElementSibling.classList.add("active-content");
                //this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";

            }

        });
    });

};

export default accordion;