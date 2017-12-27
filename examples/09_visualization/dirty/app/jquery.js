const data = {
  N2: [.2, .2, .2, .2, .2],
  P7: [.2, .2, .2, .2, .1, .1],
}

$(() => {
  $('button').click(e => {
    const code = $(e.target).data('code')
    $('#chart > svg').remove()
    for (const i in data[code]) {
      const ratio = (data[code][i] * 100).toFixed(1)
      $('#chart').append($(`
        <svg x="${60 + i * 150}">
          <text x="20" y="${440 - ratio * 4}">${ratio}%</text>
          <rect height="${ratio * 4}" width="100" y="${450 - ratio * 4}">
        </svg>
      `))
    }
  })
  $('button:first-child').click()
})

// vi:et
