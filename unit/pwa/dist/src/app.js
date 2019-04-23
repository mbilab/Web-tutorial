$(() => {
  // Step 3 code herr //


  const fetchData = () => {
    $('#hello').text(`fetching...`)

    $.get('./hello', res => {
      $('#hello').text(`server: ${res}`)
    })
  }

  $('#fetch-data').click(fetchData)
})

// vi:et:sw=2:ts=2
