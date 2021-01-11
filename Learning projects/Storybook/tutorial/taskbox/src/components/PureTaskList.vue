<template>
  <div class="list-items">
    <!-- This template is defined to depict the loading state of the app -->
    <template v-if="loading">
      <div v-for="n in 6" :key="n" class="loading-item">
        <span class="glow-checkbox" />
        <span class="glow-text">
          <span>Loading</span>
          <span>cool</span>
          <span>state</span>
        </span>
      </div>
    </template>

    <!--- This template is defined to depict the "empty list" state of the app --->
    <div v-else-if="isEmpty" class="list-items">
      <div class="wrapper-message">
        <span class="icon-check">
          <div class="title-message">You have no tasks</div>
          <div class="subtitle-message">Sit back and relax</div>
        </span>
      </div>
    </div>

    <!--- Template to actually display the lists --->
    <template v-else>
      <Task
        v-for="task in tasksInOrder"
        :key="task.id"
        :task="task"
        v-on="$listeners"
      />
    </template>
    
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: 'PureTaskList',
  components: { Task }, // Components being used in this component
  props: {
    //properties that can be set by this particular component
    tasks: {
      type: Array,
      required: true,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tasksInOrder() {
      return [
        ...this.tasks.filter(t => t.state === 'TASK_PINNED'),
        ...this.tasks.filter(t => t.state !== 'TASK_PINNED')
      ]
    },
    isEmpty() {
      return this.tasks.length === 0
    }
  }
}
</script>
