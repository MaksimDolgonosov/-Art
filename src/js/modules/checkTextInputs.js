const checkTextInputs = (selector) => {

    let textInpunts = document.querySelectorAll(selector);
    textInpunts.forEach(textInput => {
        textInput.addEventListener("input", (e) => {
            // if (e.key.match(/[^а-яё 0-9]/gi)) {
            //     e.preventDefault();
            // };
            textInput.value = textInput.value.replace(/[a-z]/gi, "");
        });

    });

};
export default checkTextInputs;