import modal from "./modules/modal";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";

window.addEventListener("DOMContentLoaded", () => {

    let state={};

    modal();
    sliders(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
    sliders(".main-slider-item", "vertical");
    forms(state);
    mask("[name='phone']");
    checkTextInputs("[name='name']");
    checkTextInputs("[name='message']");
    showMoreStyles(".button-styles", ".styles .container .row");
    calc(state);
});