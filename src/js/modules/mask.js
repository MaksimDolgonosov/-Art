const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    };

    function createMask(event) {

        let matrix = "+7 (___) ___ __ __";
        let i = 0;

        let def = matrix.replace(/\D/g, "");// вместо не чисел, пустые строки (матрица)

        let val = this.value.replace(/\D/g, "");// вместо не чисел, пустые строки (то что ввёл пользователь)


        if (def.length >= val.length) {
            val = def; // пользователь не мог удалить 7 из matrix
        }
        console.log(val);
        this.value = matrix.replace(/./g, function (a) {
            if (/[_\d]/.test(a) && i < val.length) {
                return val.charAt(i++);
            } else if (i >= val.length) {
                return "";
            } else {
                return a;
            }
        });
        console.log(this.value);

        if (event.type == "blur") {
            if (this.value.length == 2) {
                this.value = "";
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
        input.addEventListener("input", createMask);
        input.addEventListener("focus", createMask);
        input.addEventListener("blur", createMask);
    });

};
export default mask;

