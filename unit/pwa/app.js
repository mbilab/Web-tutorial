$(() => {
  const fetchData = () => {
    $.get('./data.php', res => {
      $('#version').text(`version: ${res}`)
    })
  }
  fetchData()
  $('#fetch-data').click(() => fetchData())
})
