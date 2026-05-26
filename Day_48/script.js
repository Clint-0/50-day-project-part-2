const container = document.querySelector('.container')

const unsplashURL =
  'https://source.unsplash.com/random/300x300/?nature'

const rows = 5

for(let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img')

  img.src = `${unsplashURL}&sig=${Math.random()}`

  container.appendChild(img)
}