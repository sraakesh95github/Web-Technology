<!--src/components/Task.vue-->
<template>
  <div :class="taskClass">

    <!-- Used for the archiving -->
    <label class="checkbox">
      <input type="checkbox" 
             :checked="isChecked" 
             :disabled="true" 
             name="checked" />
      <span class="checkbox-custom" 
            @click="$emit('archiveTask', task.id)" />
    </label>

    <!-- Used for displaying the title of the task -->
    <div class="title">
      <input type="text" 
             :readonly="true" 
             :value="this.task.title" 
             placeholder="Input title" />
    </div>

    <!-- Used for pinning the task -->
    <div class="actions">
      <a @click="$emit('pinTask', task.id)" v-if="!isChecked">
        <span class="icon-star" />
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'task',
    props: {
      task: {
        type: Object,
        required: true,
        default: () => ({
          id: '',
          state: '',
          title: '',
        }),
      },
    },
    computed: {
      taskClass() {
        return `list-item ${this.task.state}`;
      },
      isChecked() {
        return this.task.state === 'TASK_ARCHIVED';
      },
    },
  };
</script>