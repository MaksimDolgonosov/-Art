import { postData } from "../services/requests";
const forms = (state) => {
    const form = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");
    const upload = document.querySelectorAll("[name=upload]");

    upload.forEach(item => {
        item.addEventListener("input", () => {
            //console.log(item.files[0]);
            let dots;
            item.files[0].name.split(".")[0].length > 5 ? dots = "..." : dots = '.';
            let name = item.files[0].name.split(".")[0].substring(0, 6) + dots + item.files[0].name.split(".")[1];
            item.previousElementSibling.textContent = name;
        });
    });

    const message = {
        loading: "Идет отправка...",
        success: "Отправлено",
        failure: "Упс! что то пошло не так...",
        spinner: "assets/img/spinner.gif",
        successImage: "assets/img/ok.png",
        failureImage: "assets/img/fail.png"
    };
    const path = {
        designer: "assets/server.php",
        question: "assets/question.php"
    };

    form.forEach(e => {
        bindPostData(e);
    });



    function clearInputs() {
        inputs.forEach(e => {
            e.value = "";
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });
    }


    function bindPostData(form) {
        form.querySelector(".button-order").addEventListener("click", element => {
            element.preventDefault();
            const statusMessage = document.createElement("div");
            const statusImage = document.createElement("img");
            form.classList.add("animated", "fadeOutUp"); // что бы ушла вверх
            form.style.display = "none";
            // setTimeout(function () {
            //     form.style.display = "none";   
            // }, 400);   //форма ушла вверх
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            text-align: center;
            `;
            statusImage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            statusMessage.textContent = message.loading;
            statusImage.setAttribute("src", message.spinner);
            form.parentElement.append(statusMessage); //appendChild-?
            form.parentElement.append(statusImage);
            const formData = new FormData(form);

            if (form.classList.contains("calc_form")) {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            let api;
            form.closest(".popup-design") || form.classList.contains("calc_form") ? api = path.designer : api = path.question;

            postData(api, formData)
                .then(data => {
                    console.log(data);
                    console.log(api);
                    statusMessage.textContent = message.success;
                    statusImage.setAttribute("src", message.successImage);
                }).catch(() => {
                    statusMessage.textContent = message.failure;
                    statusImage.setAttribute("src", message.failureImage);
                    console.log("Fail");
                }).finally(() => {
                    let state = { size: "", material: "", options: "", promocode: false, totalPrice: "" };

                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        statusImage.remove();
                        form.reset();
                        form.style.display = "block";
                        // document.querySelectorAll("[data-modal]").forEach(modal => {
                        //     modal.style.display = "none";
                        //document.body.style.overflow = "";
                        form.classList.remove("fadeOutUp");
                        form.classList.add("fadeInUp");
                        document.querySelector(".calc-price").textContent = 'Для расчета нужно выбрать размер картины и материал картины';
                        // });
                    }, 3000);

                });


        });
    }
};
export default forms;