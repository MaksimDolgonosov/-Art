const mask = (selector) => {
    function createMask(event) {

        // console.log(this.value);

        let matrix = "+7 (___) ___ __ __";
        let i = 0;

        let def = matrix.replace(/\D/g, "");// вместо не чисел, пустые строки (матрица)
        let val = this.value.replace(/\D/g, "");// вместо не чисел, пустые строки (то что ввёл пользователь)
        if (def.length >= val.length) {
            val = def; // пользователь не мог удалить 7 из matrix
        }
        this.value = matrix.replace(/./g, function (a) {

        });
    }
    createMask();
};
export default mask;

