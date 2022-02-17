const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),

        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');



    menu.addEventListener("click", e => {
        if (e.target && e.target.tagName == "LI") {
            items.forEach(element => {
                element.classList.remove("active");
            });
            e.target.classList.add("active");
            markAll.forEach(element => {
                element.style.display = "none";
            });
            if (e.target.classList[0] == "grandmother" || e.target.classList[0] == "granddad") {
                no.classList.add("animated", "fadeIn");
                no.style.display = "block";
            } else {
                document.querySelectorAll(`.${e.target.classList[0]}`).forEach(el => {
                    el.classList.add("animated", "fadeIn");
                    el.style.display = "block";
                });
            }
        }
    });

};

export default filter;