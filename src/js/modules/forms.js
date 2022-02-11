const forms = () => {
    const form = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");
    // const inputForms = document.querySelectorAll("input[name='user_phone']");

    //checkNumInputs("input[name='user_phone']");


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

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };

    function clearInputs() {
        inputs.forEach(e => {
            e.value = "";
        });
    }


    function bindPostData(form) {
        form.querySelector(".button-order").addEventListener("click", element => {
            element.preventDefault();
            const statusMessage = document.createElement("div");
            const statusImage = document.createElement("img");
            form.classList.add("animated", "fadeOutUp");
            form.style.display = "none";
            // setTimeout(function () {
            //     form.style.display = "none";
            // }, 400);
            statusMessage.textContent = message.loading;
            statusImage.setAttribute("src", message.spinner);
            form.parentElement.append(statusMessage); //appendChild-?
            form.parentElement.append(statusImage);
            const formData = new FormData(form);

            let api;
            form.closest(".popup-design") ? api = path.designer : api = path.question;

            postData(api, formData)
                .then(data => {
                    console.log(data);
                    statusMessage.textContent = message.success;
                    statusImage.setAttribute("src", message.successImage);
                }).catch(() => {
                    statusMessage.textContent = message.failure;
                    statusImage.setAttribute("src", message.failureImage);
                    console.log("Fail");
                }).finally(() => {

                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        statusImage.remove();
                        document.querySelectorAll("[data-modal]").forEach(modal => {
                            modal.style.display = "none";
                            document.body.style.overflow = "";
                            // form.classList.remove("fadeOutUp");
                            // form.classList.remove("fadInUp");
                            form.style.display = "block";
                            form.reset();
                        });
                    }, 3000);

                });


        });
    }
};
export default forms;