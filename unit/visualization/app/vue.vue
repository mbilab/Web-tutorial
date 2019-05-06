<template lang="pug">
.v-app
  // Step 2.2

  // Step 3.1

  svg#chart(height="560",width="960")
    // Step 3.2
    // svg(v-for="[value and idx of data]",:x="60 + idx * 150")
    //   text(x="20",:y="440 - 400 * value") {{(value * 100).toFixed(1)}}%
    //   rect(:height="value * 400",width="100",:y='450 - value * 400')
  // step 4.1
</template>

<script>
export default {

  // created() {
  //   this.update('N2')
  // },

  data() { return {
    chart: this.N2,
    // Step 2.1

    N2: [.2, .2, .2, .2, .2],
    P7: [.2, .2, .2, .2, .1, .1],
  }},

  methods: {
    update(code) {
      this.inputData = `你按了${code}的按鈕`
    // step 4.2
    },
  },

}
</script>

<!--
vi:et
-->
