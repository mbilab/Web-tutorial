const data = {
  N2: [.2, .2, .2, .2, .2],
  P7: [.2, .2, .2, .2, .1, .1],
}

$(() => {

  // initialize
  const chart = d3.select('#chart')

  $('button').click(e => {
    const code = $(e.target).data('code')
    const bars = chart.selectAll('svg').data(data[code])
    bars.exit().remove()
    const entered = bars.enter().append('svg').attr('x', (v, i) => 60 + i * 150)
    entered.append('text').attr('x', 20)
    entered.append('rect').attr('width', 100)
    bars.select('text').attr('y', (v, i) => 440 - v * 400)
      .text((v, i) => (v * 100).toFixed(1).toString() + '%')
    bars.select('rect').attr({ 
        height: (v, i) => v * 400,
        y: (v, i) => 450 - v * 400,
      })
  })
  $('button:first-child').click()

})

// vi:et
