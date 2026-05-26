const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://randomuser.me/api/portraits/women/46.jpg',

    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details."
  },

  {
    name: 'John Doe',
    position: 'Software Engineer',
    photo:
      'https://randomuser.me/api/portraits/men/32.jpg',

    text:
      'This developer is fantastic. Clean code, amazing UI skills, and great attention to detail.'
  },

  {
    name: 'Sarah Smith',
    position: 'Designer',
    photo:
      'https://randomuser.me/api/portraits/women/65.jpg',

    text:
      'Working with him was a pleasure. Everything looked pixel perfect and professional.'
  }
]

const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } =
    testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if(idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)