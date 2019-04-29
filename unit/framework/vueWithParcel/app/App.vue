<template lang="pug">
#app
  #input.ui.input.action
    input(type="text", v-model='inputTask', placeholder="add todo...")
    button.ui.icon.button(@click='addTask()')
      i.plus.icon
  .task(v-for="task in tasks" )
    .ui.checkbox(@click='toggleCheckBox(task.name)')
      input(type="checkbox" v-model='task.toggle')
      label(v-if='!task.toggle') {{task.name}}
      label(v-if='task.toggle')
        del {{task.name}}
    i.delete.icon(v-if='task.toggle' @click='rmTask(task.name)')
</template>

<script>
import 'semantic-ui-offline/semantic.min.css'
export default {

  data() {return {
    inputTask: '',
    tasks: []
  }},

  methods: {

    addTask() {
      if (!this.inputTask)
        return
      this.tasks.push({
        name: this.inputTask,
        toggle: false
      })
      this.inputTask = ''
    },

    rmTask(tsk) {
      this.tasks = this.tasks.filter(task => task.name != tsk)
    },

    toggleCheckBox(tsk) {
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

