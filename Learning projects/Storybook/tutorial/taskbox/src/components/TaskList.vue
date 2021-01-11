<template>
  <pure-task-list
    :tasks="tasks"
    v-on="$listeners"
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>

<script>
import PureTaskList from './PureTaskList.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: { PureTaskList },
  methods: mapActions(['archiveTask', 'pinTask']),
  computed: mapState(['tasks'])
}
</script>
