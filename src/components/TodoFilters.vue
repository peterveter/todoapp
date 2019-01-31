<template>
  <div>
    <div class="mb-0 sm:mb-3 flex flex-row flex-wrap sm:flex-no-wrap">
      <input
        :value="query"
        placeholder="Type to search..."
        class="font-sans pl-2 shadow rounded h-10 w-3/4 mb-2 sm:mb-0 sm:w-2/5"
        @input="updateQuery($event.target.value)"
      >
      <button
        @click="changeFilter(statusFilters.ALL)"
        :class="status === statusFilters.ALL ? 'bg-orange-light text-white' : 'bg-white text-orange-light border-orange-lighter border-2'"
        class="font-sans truncate shadow hover:bg-orange-light hover:border-orange-light hover:text-white font-bold py-2 px-3 sm:ml-1 w-1/4 rounded sm:w-1/5 mb-2 sm:mb-0 focus:outline-none"
      >All</button>
      
      <button
        @click="changeFilter(statusFilters.COMPLETED)"
        :class="status === statusFilters.COMPLETED ? 'bg-orange-light text-white' : 'bg-white text-orange-light border-orange-lighter border-2'"
        class="font-sans truncate shadow hover:bg-orange-light hover:border-orange-light hover:text-white font-bold py-2 px-3 sm:ml-1 rounded w-1/2 sm:w-1/5 mb-2 sm:mb-0 focus:outline-none"
      >Completed</button>
      <button
        @click="changeFilter(statusFilters.UNCOMPLETED)"
        :class="status === statusFilters.UNCOMPLETED ? 'bg-orange-light text-white' : 'bg-white text-orange-light border-orange-lighter border-2'"
        class="font-sans truncate shadow hover:bg-orange-light hover:border-orange-light hover:text-white font-bold py-2 px-3 sm:ml-1 rounded w-1/2 sm:w-1/5 mb-2 sm:mb-0 focus:outline-none"
      >Uncompleted</button>
    </div>

    <button
      @click="resetFilters"
      class="font-sans truncate shadow bg-blue-light hover:bg-blue-dark text-white font-bold h-10 py-2 px-4 rounded w-full"
    >RESET FILTERS</button>
  </div>
</template>
<script>
import statusFilters from '../constants/statusFilters';

export default {
  props: ["status", "query"],
  computed: {
    statusFilters: () => statusFilters,
  },
  methods: {
    changeFilter(status) {
      this.$emit("change-filter", status);
    },
    resetFilters() {
      this.$emit("reset-filters");
    },
    updateQuery(value) {
      this.$emit("update-query", value);
    }
  }
};
</script>

