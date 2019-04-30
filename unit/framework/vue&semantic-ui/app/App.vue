<template lang="pug">
#app
  <!-- step 2 code here -->

  <!-- step 3.2 code here -->

  <!-- step 5 code here -->

</template>

<script>
export default {

  data() {return {
    // step 3.3 code here
    // step 4.2 code here
  }},

  methods: {

    // step 4.3 code here

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

