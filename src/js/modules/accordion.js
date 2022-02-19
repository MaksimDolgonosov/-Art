const accordion = (triggerSelector) => {
    let btnTrigger = document.querySelectorAll(triggerSelector);
    let blocks = document.querySelectorAll(".accordion-block");





    btnTrigger.forEach(e => {
        e.addEventListener("click", function () {
            if (this.classList.contains("active-style") || this.nextElementSibling.classList.contains("active-content")) {
                this.classList.remove("active-style");
                this.nextElementSibling.classList.remove("active-content");
                //this.nextElementSibling.style.maxHeight = "0px";
            } else {
                blocks.forEach(e => {
                    e.classList.remove("active-content");
                });
                btnTrigger.forEach(e => {
                    e.classList.remove("active-style");
                });
                this.classList.add("active-style");
                this.nextElementSibling.classList.add("active-content");


                //this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";

            }

        });
    });

};

export default accordion;