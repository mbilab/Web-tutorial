if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(reg => {
    console.log(`SW is registered with scope: ${reg.scope}`)
  })
  .catch(err => {
    console.log('SW Error ', err)
  })
}
