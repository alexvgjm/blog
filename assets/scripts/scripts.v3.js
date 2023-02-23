document.addEventListener('DOMContentLoaded', ()=>{
    function initMenuBehaviour() {
        const toggleMenuButton = document.querySelector('.menu-button')
        const mainHeader       = document.querySelector('.main-header')
        const menuBackdrop     = document.querySelector('.menu-backdrop')
        
        function toggleMenu() {
            mainHeader.classList.toggle('main-header--open')
            toggleMenuButton.classList.toggle('menu-button--open')
        }

        toggleMenuButton.addEventListener('click', toggleMenu)
        menuBackdrop.addEventListener('click', toggleMenu)
    }

    initMenuBehaviour()
})