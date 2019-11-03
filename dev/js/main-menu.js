const toggleMenu = document.getElementById('toggle-menu')
const aside = document.getElementById('aside')

toggleMenu.addEventListener('click', (e) => {
    if (e.target.id == 'toggle-menu' || e.target.parentElement.id == 'toggle-menu') {
        aside.classList.toggle('show')
        toggleMenu.classList.toggle('show')
    }
})