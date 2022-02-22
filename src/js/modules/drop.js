import postData from "../services/requests";
const drop = () => {
    const fileInputs = document.querySelectorAll("[name=upload]");

    ["dragenter", "dragleave", "dragover", "drop"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation(); //stopPropagation() объекта Event прекращает дальнейшую передачу текущего события (предотвращает всплытие по дереву DOM).
    }


    function highlight(e) {
        e.closest(".file_upload").style.border = "5px solid yellow";
    }

    function unhighlight(e) {
        e.closest(".file_upload").style.border = "none";
        if (e.closest(".calc_form")) {
            e.closest(".file_upload").style.backgroundColor = "#fff";
        } else if (e.closest(".container")) {
            e.closest(".file_upload").style.backgroundColor = "#f7e7e6";
        } else {
            e.closest(".file_upload").style.backgroundColor = "#ededed";
        }


    }

    ["dragenter", "dragover",].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });
    ["dragleave", "drop"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener("drop", e => {
            input.files = e.dataTransfer.files;
            if (input.closest(".container")) {
                fetch("assets/server.php", {
                    method: "POST",
                    body: input.files[0]
                }).then(data => {
                    console.log(data);
                    input.previousElementSibling.textContent = 'Файл отправлен';
                }).catch(() => {
                    console.log("Fail");
                }).finally(() => {
                    setTimeout(() => {
                        input.previousElementSibling.textContent = 'Файл не выбран';
                    }, 2000);
                });
            }

            let dots;
            input.files[0].name.split(".")[0].length > 5 ? dots = "..." : dots = '.';
            let name = input.files[0].name.split(".")[0].substring(0, 6) + dots + input.files[0].name.split(".")[1];
            input.previousElementSibling.textContent = name;

            // let image = input.closest(".file_upload");
            // image.querySelector("button").style.display = "none";
            // console.log(e.dataTransfer.files);
            // let littleImage = document.createElement("img");
            // littleImage.style.cssText = `float: right`;
            // littleImage.setAttribute("src", e.target.ownerDocument.location.href);
            // image.prepend(littleImage);

        });
    });

};
export default drop;