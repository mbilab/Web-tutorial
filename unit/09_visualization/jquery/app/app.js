import './index.pug'
import 'semantic-ui-offline/semantic.css'
import './app.sass'

window.$ = window.jQuery = require('jquery')
const data = require('./course.csv')

$(() => {
  $('.button').click(e => {
    const course = data.filter(el => el[1] === $(e.target).data('code'))
    let newData = [0, 0, 0, 0, 0, 0, 0]
    let sum = 0
    for (let i = 0; i < course.length; i++) {
      newData[parseInt(course[i][15].match(/\[([0-9])\]/)[1]) - 1]++
      sum++
    }

    $('.x-title').text($(e.target).text())

    $('.bars g').each((idx, el) => {
      $(el).find('rect')
           .attr('height', 400 * newData[idx] / sum)
           .attr('y', 450 - 400 * newData[idx] / sum)
      $(el).find('.percent')
           .attr('y', 440 - 400 * newData[idx] / sum)
           .text((newData[idx] / sum * 100).toFixed(2).toString() + '%')
    })
  })
  $('.button:first-child').click()
})
