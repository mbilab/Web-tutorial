const sayHello = (name) => {
  if (!name) {
    return "Hello human!"
  }

  return `Hello ${name}!`
}

var button = document.getElementById('greetings-show-button')
var input = document.getElementById('greetings-input')
var text = document.getElementById('greeting-text')

button.addEventListener('click', function () {
  text.innerHTML = sayHello(input.value)
})
