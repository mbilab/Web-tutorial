<template lang="pug">
.v-app
  // Step 2.2
  // 你的輸入會跟 inputData 雙向綁定，並在螢幕顯示

  // Step 3.1
  // 使用 v-for，網頁內容隨著資料迭代渲染。

  // Step 3.2
  // 完成 v-for 的語法，定義裡的value跟idx
  svg#chart(height="560",width="960")
    svg(v-for="[value and idx of data]",:x="60 + idx * 150")
      text(x="20",:y="440 - 400 * value") {{(value * 100).toFixed(1)}}%
      rect(:height="value * 400",width="100",:y='450 - value * 400')
  // step 4.1
  // 加入 button
</template>

<script>
export default {

  // created() {
  //   this.update('N2')
  // },

  data() { return {
    chart: this.N2,
    // Step 2.1
    // 加入變數

    N2: [.2, .2, .2, .2, .2],
    P7: [.2, .2, .2, .2, .1, .1],
  }},

  methods: {
    update(code) {
      this.inputData = `你按了${code}的按鈕`
    // step 4.2
    // 換你寫了
    },
  },

}
</script>

<!--
vi:et
-->
