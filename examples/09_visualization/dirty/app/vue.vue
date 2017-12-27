<template lang="pug">
.v-app
  svg#chart(height='560',width='960')
    svg(v-for="(v, i) in chart" :x="60 + i * 150")
      text(x="20" :y="440 - 400 * v") {{(v * 100).toFixed(1)}}%
      rect(:height="v * 400" width="100" :y='450 - v * 400')
  div
    button(@click="update('N2')") 電機所
    button(@click="update('P7')") 資訊所
</template>

<script>
export default {

  created() {
    this.update('N2')
  },

  data() { return {
    chart: [],
    N2: [.2, .2, .2, .2, .2],
    P7: [.2, .2, .2, .2, .1, .1],
  }},

  methods: {
    update(code) {
      this.chart = this[code]
    },
  },

}
</script>

<!--
vi:et
-->
