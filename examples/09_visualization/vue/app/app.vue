<template lang="pug">
.v-app
  #container
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
      chart: null,
      chartTitle: '',
      chartData: [
        { name: '星期一', y: 0 },
        { name: '星期二', y: 0 },
        { name: '星期三', y: 0 },
        { name: '星期四', y: 0 },
        { name: '星期五', y: 0 },
        { name: '其他', y: 0 },
      ]
    }
  },

  mounted() {
    const Highcharts = require('highcharts')
    this.$data.chart = Highcharts.chart('container', {
      chart: { type: 'column' },
      title: { text: '課程分佈' },
      subtitle: { text: '看看一個禮拜哪一天的課最少' },
      xAxis: { type: 'category' },
      yAxis: { title: { text: '百分比' } },
      legend: { enable: false },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
      series: [{
        name: 'Coures Data',
        colorByPoint: true,
        data: this.$data.chartData
      }],
    })

    setTimeout(() => this.update("N2", "電機所"), 500)
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
        { name: '星期一', y: newData[0] / sum * 100 },
        { name: '星期二', y: newData[1] / sum * 100 },
        { name: '星期三', y: newData[2] / sum * 100 },
        { name: '星期四', y: newData[3] / sum * 100 },
        { name: '星期五', y: newData[4] / sum * 100 },
        { name: '其他', y: (newData[5] + newData[6]) / sum * 100 },
      ]

      setTimeout(() => this.$data.chartTitle = name, 500)
    },
  },

  watch: {
    chartData(now, old) {
      this.$data.chart.series[0].update({ data: now }, true)
    },
    chartTitle(now, old) {
      this.$data.chart.series[0].update({ name: now }, true)
    },
  },

}
</script>

<style lang="sass" scoped>
</style>
