const shareBtnEl = document.querySelector('.share')
const socialMediaEl = document.querySelector('.hidden')

shareBtnEl.addEventListener('click', () => {
    socialMediaEl.classList.remove('hidden')
})