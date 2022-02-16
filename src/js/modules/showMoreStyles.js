import { getResource } from "../services/requests";

const showMoreStyles = (trigger, cards) => {
    const trgBtn = document.querySelector(trigger);
    const wrapper = document.querySelector(cards);
    trgBtn.addEventListener("click", function () {
        getResource("http://localhost:3000/styles")
            .then(data => createData(data))
            .catch();
        this.remove();// в обработчике событий this сработает с function, со стрелочной функцией не работает
    });

    function createData(data) {
        data.forEach(item => {
            let element = document.createElement("div");
            element.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1", "animated", "fadeInUp");
            element.innerHTML = `
            <div class=styles-block>
				<img src=${item.src} alt>
				<h4>${item.title}</h4>
				<a href="${item.link}">Подробнее</a>
			</div>`;
            wrapper.append(element);
        });


    }





    // cardList.forEach(card => {
    //     card.classList.add("animated", "fadeInUp");
    // });

    // trgBtn.addEventListener("click", () => {
    //     cardList.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     trgBtn.remove();
    // });

};
export default showMoreStyles;