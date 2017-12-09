if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(reg => {
    console.log('SW registered ', reg)
  })
  .catch(err => {
    console.log('SW Error ', err)
  })
}
