const showMoreStyles = (trigger, cards) => {
    const trgBtn = document.querySelector(trigger);
    const cardList = document.querySelectorAll(cards);
    console.log(cardList);

    cardList.forEach(card => {
        card.classList.add("animated", "fadeInUp");
    });

    trgBtn.addEventListener("click", () => {
        cardList.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        trgBtn.remove();
    });

};
export default showMoreStyles;