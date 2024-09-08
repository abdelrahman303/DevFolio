let upArrow = document.getElementById('upArrow')
window.onscroll = () => {
    if (document.documentElement.scrollTop > window.innerHeight) {
        upArrow.classList.remove('d-none')
    } else {
        upArrow.classList.add('d-flex')
    }
}
upArrow.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
})