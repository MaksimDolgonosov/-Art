const calc = (state) => {
    let size = document.querySelector("#size");
    let material = document.querySelector("#material");
    let options = document.querySelector("#options");
    let promocode = document.querySelector(".promocode");
    let result = document.querySelector(".calc-price");

    let sum = 0;

    let arrSize = {
        "500": "40x50",
        "1000": "50x70",
        "1500": "70x70",
        "2000": "70x100"
    };

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

    function stateValues() {
        let key = this.value;
        console.log(key);
    }

    size.addEventListener("change", calcFunc);
    material.addEventListener("change", calcFunc);
    options.addEventListener("change", calcFunc);
    promocode.addEventListener("input", calcFunc);

    size.addEventListener("change", stateValues);
    material.addEventListener("change", stateValues);
    options.addEventListener("change", stateValues);
    promocode.addEventListener("input", stateValues);

};

export default calc;