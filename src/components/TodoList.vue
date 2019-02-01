<template>
  <div class="w-auto h-full flex items-center mx-2 sm:mx-4 justify-center">
    <div
      class="flex flex-col lg:m-10 lg:w-6/8 xl:w-3/5 lg:m-0 w-full rounded shadow-lg bg-grey-lighter"
    >
      <div
        class="w-full h-12 text-4xl flex justify-center mt-4 my-2 font-sans text-blue-lighter"
      >TODOS</div>

      <div class="w-auto m-2 p-3 bg-white rounded flex-col mb-6">
        <div class="flex flex-col sm:flex-row">
          <input
            v-model.trim="newTodoName"
            placeholder="What to do?"
            @keyup.enter="addTodoClicked"
            class="font-sans shadow rounded w-full sm:w-3/5 h-10 mb-2 pl-2"
          >
          
          <button
            :disabled="isButtonDisabled"
            :class="isButtonDisabled ? 'bg-grey-light border-grey-light text-dark-grey cursor-not-allowed' : 'bg-white border-blue-light text-blue-light hover:text-white focus:bg-white hover:bg-blue-light'"
            class="font-sans truncate shadow border-2 font-bold h-10 px-4 rounded w-full sm:w-2/5 sm:ml-1"
            @click="addTodoClicked"
          >
            <font-awesome-icon :icon="['fas', 'plus']" class="mr-2"/>ADD
          </button>
        </div>

        <div class="my-4 mt-3 sm:my-6 flex-col" v-if="filteredTodos.length">
          <todo-item
            v-for="todo in filteredTodos"
            :todo="todo"
            :key="todo.id"
            @delete-todo="deleteTodo(todo.id)"
            @toggle-todo="toggleTodo(todo.id)"
          ></todo-item>
        </div>
        <div class="flex items-center justify-center h-24 w-full" v-else-if="todos.length">
          <div
            class="w-full text-lg sm:text-2xl flex justify-center font-sans text-grey-light"
          >Items not found.</div>
        </div>

        <div class="flex items-center justify-center h-32 w-full" v-else>
          <spinner :size="40"></spinner>
        </div>

        <todo-filters
          :status="filterStatus"
          :query="filterQuery"
          @change-filter="changeFilterStatus"
          @reset-filters="resetFilters"
          @update-query="updateQueryFilter"
        ></todo-filters>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import TodoFilters from './TodoFilters';
import { mapState, mapGetters, mapActions } from 'vuex';
import Spinner from 'vue-spinner-component/src/Spinner.vue';

export default {
  components: {
    TodoItem,
    TodoFilters,
    Spinner,
  },
  data: () => ({
    newTodoName: '',
  }),
  created() {
    this.fetchTodos();
  },
  computed: {
    ...mapState(['todos', 'filterQuery', 'filterStatus']),
    ...mapGetters(['filteredTodos']),
    isButtonDisabled() {
      return this.newTodoName.length === 0;
    },
  },
  methods: {
    ...mapActions([
      'addTodo',
      'deleteTodo',
      'toggleTodo',
      'resetFilters',
      'updateQueryFilter',
      'changeFilterStatus',
      'fetchTodos',
      'fetchTodo',
    ]),
    addTodoClicked() {
      this.addTodo({ text: this.newTodoName });

      this.newTodoName = '';
    },
  },
};
</script>
