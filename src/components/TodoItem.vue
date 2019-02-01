<template>
  <transition name="todo">
    <div class="mb-3 bg-grey-lighter rounded-full p-2 flex justify-between shadow">
      <div class="font-sans items-center flex pl-1 sm:pl-2">
        <span :class="todo.done ? 'line-through text-grey' : 'no-underline'">{{ todo.text }}</span>
      </div>

      <div class="flex">
        <button
          @click="deleteTodo()"
          class="sm:p-2 sm:border-red-lighter sm:border-2 sm:hover:bg-red-lighter sm:hover:text-white text-red-lighter w-12 p-1 w-auto mr-2 rounded focus:outline-none"
        >
          <font-awesome-icon :icon="['fas', 'trash-alt']"/>
        </button>
        <button
          @click="toggleTodo()"
          class="sm:p-2 sm:border-2  sm:mr-2 p-1 w-auto rounded focus:outline-none"
          :class="todo.done ? 'sm:border-green-light xl:hover:bg-white text-green-light xl:hover:text-green-light' 
                                    : 'sm:border-blue-light xl:hover:bg-blue-light xl:hover:text-white text-blue-light'"
        >
          <font-awesome-icon :icon="['fas', 'check-circle']"/>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTodo() {
      this.$emit('delete-todo');
    },
    toggleTodo() {
      this.$emit('toggle-todo');
    },
  },
};
</script>


<style>
.todo-enter-active {
  animation: add-item 1s;
}

.todo-move {
  transition: transform 1s;
}
@keyframes add-item {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-10px) skewX(20deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
