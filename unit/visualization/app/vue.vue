<template lang="pug">
.v-app
  p hello world
  // Step 2.2


  br
  // Step 3.1


  br
  svg#chart(height="460",width="960")
    // Step 3.2


  // step 4.1


</template>

<script>
export default {

  created() {
    this.chart = this.N2
  },

  data() { return {
    chart: null,

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
