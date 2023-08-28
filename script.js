const showIdButton = document.querySelectorAll('.show-id')
const collapseButton = document.querySelectorAll('.collapse-button')

collapseButton.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.toggle('open')
  })

})

showIdButton.forEach((e) => {
  e.addEventListener('click', () => {
    e.parentNode.classList.toggle('id')
})
})
