const calc = (state) => {
    let size = document.querySelector("#size");
    let material = document.querySelector("#material");
    let options = document.querySelector("#options");
    let promocode = document.querySelector(".promocode");
    let result = document.querySelector(".calc-price");

    let sum = 0;

    const calcFunc = () => {

        sum = Math.round((+size.value) * (+material.value) + (+options.value));
        if (size.value == "" || material.value == "") {
            result.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocode.value === 'IWANTPOPART') {

            result.textContent = Math.round(sum * 0.7);
            state.price = Math.round(sum * 0.7);
        } else {
            result.textContent = sum;
            state.price = sum;

        }

    };

    size.addEventListener("change", calcFunc);
    material.addEventListener("change", calcFunc);
    options.addEventListener("change", calcFunc);
    promocode.addEventListener("input", calcFunc);



};

export default calc;