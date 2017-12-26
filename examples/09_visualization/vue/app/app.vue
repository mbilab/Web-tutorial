<template lang="pug">
.v-app
  svg.chart(width='960', height='560')
    text.title(x='300', y='40', transform='scale(1.4, 1.4)') 課程分佈
    text.subtitle(x='380', y='90') 看看一個禮拜哪天課最少~
    text(x='360', y='440', transform='scale(1.2, 1.2)') {{x}}
    circle(cx='350', cy='436', r='5', transform='scale(1.2, 1.2)', fill='gray')
    g
      line.axis(x1='35', y1='40', x2='35', y2='450')
      line.axis(x1='35', y1='450', x2='960', y2='450')
      line.dashed-line(x1='35', y1='130', x2='960', y2='130', stroke-dasharray='5,5')
      line.dashed-line(x1='35', y1='210', x2='960', y2='210', stroke-dasharray='5,5')
      line.dashed-line(x1='35', y1='290', x2='960', y2='290', stroke-dasharray='5,5')
      line.dashed-line(x1='35', y1='370', x2='960', y2='370', stroke-dasharray='5,5')
    g
      text(y='50') 100
      text(y='130') 80
      text(y='210') 60
      text(y='290') 40
      text(y='370') 20
      text(y='450') 0
    g(v-for='(data, idx) in chartData'): svg(:x='idx * 150 + 60')
      rect(width='100', :height='400 * data.y', :fill='"rgb("+color[idx]+")"', :y='450 - 400 * data.y')
      text(x='20', :y='440 - 400 * data.y', fill='black') {{(data.y * 100).toFixed(2) + "%"}}
      text(x='10', y='400', transform='scale(1.2, 1.2)') {{data.name}}
  .ui.basic.buttons
    button.ui.basic.button(@click='update("N2", "電機所")') 電機所
    button.ui.basic.button(@click='update("P7", "資訊所")') 資訊所
    button.ui.basic.button(@click='update("Q3", "電通所")') 電通所
    button.ui.basic.button(@click='update("R3", "工資所")') 工資所
    button.ui.basic.button(@click='update("R4", "企管所")') 企管所
    button.ui.basic.button(@click='update("K1", "中文所")') 中文所
    button.ui.basic.button(@click='update("K2", "外文所")') 外文所
    button.ui.basic.button(@click='update("P2", "都計所")') 都計所
    button.ui.basic.button(@click='update("P3", "工設所")') 工設所
    button.ui.basic.button(@click='update("L2", "物理所")') 物理所
    button.ui.basic.button(@click='update("L3", "化學所")') 化學所
    button.ui.basic.button(@click='update("T2", "護理所")') 護理所
    button.ui.basic.button(@click='update("T3", "醫技所")') 醫技所
</template>

<script>
const data = require('./course.csv')
export default {
  name: 'App',

  data() {
    return {
      color: [
        '124, 181, 236',
        '67, 67, 72',
        '144, 237, 125',
        '247, 163, 92',
        '128, 133, 233',
        '241, 92, 128',
      ],
      chartData: [
        { name: '星期一', y: 0.7 },
        { name: '星期二', y: 0.15 },
        { name: '星期三', y: 0 },
        { name: '星期四', y: 0.5 },
        { name: '星期五', y: 0.1 },
        { name: '其他', y: 0 },
      ],
      x: ''
    }
  },

  mounted() {
    this.update('N2', '電機所')
  },

  methods: {
    update(code, name) {

      const course = data.filter(el => el[1] === code)
      let newData = [0, 0, 0, 0, 0, 0, 0]
      let sum = 0
      for (let i = 0; i < course.length; i++) {
        newData[parseInt(course[i][15].match(/\[([0-9])\]/)[1]) - 1]++
        sum++
      }

      this.$data.chartData = [
        { name: '星期一', y: newData[0] / sum },
        { name: '星期二', y: newData[1] / sum },
        { name: '星期三', y: newData[2] / sum },
        { name: '星期四', y: newData[3] / sum },
        { name: '星期五', y: newData[4] / sum },
        { name: '其他', y: (newData[5] + newData[6]) / sum },
      ]

      this.$data.x = name

    },
  },
}
</script>

<style lang="sass" scoped>
.chart
  margin-left: calc(50vw - 480px)

.dashed-line
  stroke: rgba(50, 50, 50 ,.2)
  stroke-width: 2

.axis
  stroke: rgba(50, 50, 50, 1)
  stroke-width: 2

.ui.buttons.basic
  margin: 50px
</style>
