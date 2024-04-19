<template lang="pug">
#app
  #input
    // Step 1.1 code goes here
    input(v-model="task", type="text", placeholder="Task...")
    // Step 2.1 code goes here
    button(@click='addTask') Add

  // Step 1.2 code goes here
  p {{ task }}

  // Step 3.1 code goes here
.task(v-for="task in tasks")
  div(@click='toggleTask(task.name)')
    input(v-model="task.toggle",type="checkbox")
    label(v-if="!task.toggle") {{ task.name }}
    label(v-if="task.toggle"): del {{ task.name }}
</template>

<script>
export default {
  data() {
    return {
      // Step 1.3 code goes here
      task: "Data binding is cool!",
      // Step 2.2 code goes here
      tasks: [],
    };
  },

  methods: {
    // Step 2.3 code goes here
    addTask() {
      if (!this.task) return;
      this.tasks.push({
        name: this.task,
        toggle: false,
      });
      this.task = "";
    },

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
