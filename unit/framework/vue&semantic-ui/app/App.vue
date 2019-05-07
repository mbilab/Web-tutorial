<template lang="pug">
#app
  // Step 2 code here
  // 打包後，就能看到和 [semantic-ui 官網](https://semantic-ui.com/elements/input.html#action) 一樣的 input。
  #input.ui.input.action
    // Step 2.1


    // Step 2.2


  // Step 3.2 code here

  // Step 5 code here

</template>

<script>
export default {

  data() {return {

    // Step 3.3 code here

    // Step 4.2 code here

  }},

  methods: {

    // Step 4.3 code here

    rmTask(tsk) {
      this.tasks = this.tasks.filter(task => task.name != tsk)
    },

    toggleTask(tsk) {
      const toggle = this.tasks.find(task => task.name === tsk).toggle
      this.tasks.find(task => task.name === tsk).toggle = !toggle

    }
  }
}
</script>

<style lang="sass">
html
  font-size: large
#app
  width: 22em
  margin: auto
  display: flex
  flex-direction: column
  padding: 2em
.task
  margin-top: 1em
  display: flex
  justify-content: space-between
</style>

