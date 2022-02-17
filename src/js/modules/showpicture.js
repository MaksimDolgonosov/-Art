const showpicture = () => {
    const wrapper = document.querySelector(".sizes-wrapper");
    const item = wrapper.querySelectorAll(".sizes-block");

    item.forEach(picture => {
        picture.addEventListener("mouseenter", e => {            
            let img = e.target.querySelector("img");
            img.src = img.src.slice(0, -4) + "-1.png";
            e.target.querySelectorAll("p:not(.sizes-hit)").forEach(e => {
                e.style.display = "none";
            });
        });
    });
    item.forEach(picture => {
        picture.addEventListener("mouseleave", e => {            
            let img = e.target.querySelector("img");
            img.src = img.src.slice(0, -6) + ".png";
            e.target.querySelectorAll("p").forEach(e => {
                e.style.display = "block";
            });
        });
    });

};
export default showpicture;