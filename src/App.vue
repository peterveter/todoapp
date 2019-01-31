<template>
  <div class="mt-10">
    <todo-list></todo-list>
  </div>
</template>

<script>
import '@/assets/css/tailwind.css';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoList,
  },
};
</script>
