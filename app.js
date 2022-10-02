let nav = document.querySelector('nav');

document.addEventListener('scroll', toggle_bg);

function toggle_bg() {

    nav.classList.toggle('scrolling-active', window.scrollY > 0);
}
// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })
// window.addEventListener("hashchange", function() { scrollBy(0, -50) });

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');
        }
        else {

            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));