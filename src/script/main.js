const buttons = document.querySelectorAll('[data-tab-button]');
const questions = document.querySelectorAll('[data-faq-question]')

document.addEventListener('DOMContentLoaded', function () {
    buttons.forEach(button => {
        button.addEventListener('click', selectShow)
    })

    questions.forEach(question => {
        question.addEventListener('click', openOrCloseAnswer)
    })
})

//funcionalidades da section class="faq"
function openOrCloseAnswer(element) {
    const classFaq = 'faq__questions__item--is-open';
    const fatherElement = element.target.parentNode;
    fatherElement.classList.toggle(classFaq);
}
//funcionalidades da section class="faq"

//funcionalidades da section class="show"
function selectShow(event) {
    const navTarget = event.target.dataset.tabButton;
    const nav = document.querySelector(`[data-tab-id=${navTarget}]`);
    hideNav();
    removeButtonActive();
    nav.classList.add('show__list--is-active');
    event.target.classList.add('show__tabs__button--is-active');
}

function removeButtonActive() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('show__tabs__button--is-active');
    }
}

function hideNav() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('show__list--is-active');
    }
}
//funcionalidades da section class="show"