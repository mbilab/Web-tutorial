<template lang="pug">
#app
  #input
    // Step 1.1 code goes here
    // Step 2.1 code goes here

  // Step 1.2 code goes here

  // Step 3.1 code goes here
</template>

<script>
export default {
  data() {
    return {
      // Step 1.3 code goes here
      // Step 2.2 code goes here
    };
  },

  methods: {
    // Step 2.3 code goes here

    toggleTask(tsk) {
      const toggle = this.tasks.find((task) => task.name === tsk).toggle;
      this.tasks.find((task) => task.name === tsk).toggle = !toggle;
    },
  },
};
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
