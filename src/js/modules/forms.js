const forms = () => {
    const form = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");
    // const inputForms = document.querySelectorAll("input[name='user_phone']");

    //checkNumInputs("input[name='user_phone']");


    const message = {
        loading: "Идет отправка...",
        success: "Отправлено",
        failure: "Упс! что то пошло не так...",
        spinner: "assets/img/spinner.gif"
    };

    form.forEach(e => {
        bindPostData(e);
    });

    const postData = async (url, data) => {
        document.querySelector(".status").textContent = message.loading;
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
        form.addEventListener("submit", element => {
            element.preventDefault();
            const statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            //statusMessage.textContent = message.loading;
            form.append(statusMessage); //appendChild-?
            const formData = new FormData(form);
            if (form.getAttribute("data-form") === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }

            }



            postData("assets/server.php", formData)
                .then(data => {
                    console.log(data);
                    statusMessage.textContent = message.success;
                }).catch(() => {
                    statusMessage.textContent = message.failure;
                    console.log("Fail");
                }).finally(() => {
                    form.reset();
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                    if (form.getAttribute("data-form") === "end") {
                        state = {};
                        setTimeout(() => {
                            document.querySelectorAll("[data-modal]").forEach(modal => {
                                modal.style.display = "none";
                                document.body.style.overflow = "";
                                form.reset();
                            });
                        }, 4000);



                    }
                });


        });
    }
};
export default forms;