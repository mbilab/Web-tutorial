<template lang="pug">
.v-app
  p hello world
  // Step 2.2 code goes here

  br
  // Step 3.1 code goes here

  br
  svg#chart(height="460",width="960")
    // Step 3.2 code goes here

  // Step 4.1 code goes here

</template>

<script>
export default {

  created() {
    this.chart = this.N2
  },

  data() { return {
    chart: null,

    // Step 2.1 code goes here

    N2: [.2, .2, .2, .2, .2],
    P7: [.2, .2, .2, .2, .1, .1],
  }},

  methods: {
    update(code) {
      this.inputData = `你按了 ${code}`
      // Step 4.2 code goes here
    },
  },

}
</script>
