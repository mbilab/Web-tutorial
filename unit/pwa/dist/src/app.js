$(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
    .then(reg => {
      console.log(`SW is registered with scope: ${reg.scope}`)
    })
    .catch(err => {
      console.log('SW Error ', err)
    })
  }
  
  const fetchData = () => {
    $('#hello').text(`fetching...`)

    $.get('./hello', res => {
      $('#hello').text(`server: ${res}`)
    })
  }

  $('#fetch-data').click(fetchData)
})

// vi:et:sw=2:ts=2
