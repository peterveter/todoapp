import statusFilters from '../constants/statusFilters';

export default {
  searchedTodos: ({ filterQuery, todos }) =>
    todos.filter(todo => todo.text.toLowerCase().includes(filterQuery.toLowerCase())),
  filteredTodos: ({ filterStatus }, { searchedTodos }) =>
    filterStatus !== statusFilters.ALL
      ? searchedTodos.filter(
          todo => todo.done === (filterStatus === statusFilters.COMPLETED)
        )
      : searchedTodos,
};
