const buttons = document.querySelectorAll('[data-tab-button]');
document.addEventListener('DOMContentLoaded', function () {


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (button) {
            const navTarget = button.target.dataset.tabButton;
            const nav = document.querySelector(`[data-tab-id=${navTarget}]`);
            hideNav();
            removeButtonActive();
            nav.classList.add('show__list--is-active');
            button.target.classList.add('show__tabs__button--is-active');
        })
    }
})

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