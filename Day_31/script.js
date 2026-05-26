const pwEl = document.getElementById('pw')
const copyEl = document.getElementById('copy')
const lenEl = document.getElementById('len')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
  const length = +lenEl.value
  const hasLower = lowerEl.checked
  const hasUpper = upperEl.checked
  const hasNumber = numberEl.checked
  const hasSymbol = symbolEl.checked

  pwEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  )
})

copyEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = pwEl.innerText

  if(!password) {
    return
  }

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()

  alert('Password copied to clipboard!')
})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''

  const typesCount = lower + upper + number + symbol

  const typesArr = [{ lower }, { upper }, { number }, { symbol }]
    .filter(item => Object.values(item)[0])

  if(typesCount === 0) {
    return ''
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]

      generatedPassword += randomFunc[funcName]()
    })
  }

  const finalPassword = generatedPassword.slice(0, length)

  return finalPassword
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.' 
  return symbols[Math.floor(Math.random() * symbols.length)]
}