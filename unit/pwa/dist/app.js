$(() => {
  const fetchData = () => {
    $.get('./version', res => {
      $('#version').text(`version: ${res}`)
    })
  }

  fetchData()
  $('#fetch-data').click(fetchData)
})
// vi:et:sw=2:ts=2
