const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.getElementById('send')
const panel = document.getElementById('panel')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  if(
    e.target.parentNode.classList.contains('rating')
  ) {
    removeActive()

    e.target.parentNode.classList.add('active')

    selectedRating =
      e.target.nextElementSibling.innerHTML
  }

  if(
    e.target.classList.contains('rating')
  ) {
    removeActive()

    e.target.classList.add('active')

    selectedRating =
      e.target.querySelector('small').innerHTML
  }
})

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
    <strong>Thank You!</strong>

    <br><br>

    <strong>Feedback: ${selectedRating}</strong>

    <p>We'll use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  ratings.forEach(rating =>
    rating.classList.remove('active')
  )
}