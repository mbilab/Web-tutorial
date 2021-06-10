const sayHello = (name) => {
  if (!name) {
    return "Hello human!"
  }

  return `Hello ${name}!`
}

module.exports = sayHello
