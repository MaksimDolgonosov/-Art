const accordion = (triggerSelector) => {
    let btnTrigger = document.querySelectorAll(".accordion-heading span");
    console.log(btnTrigger);
    btnTrigger[0].classList.add("active-style");
};

export default accordion;