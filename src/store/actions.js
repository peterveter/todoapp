import * as types from '../constants/mutationTypes';
import { TodoResource } from '../api/todos';

export default {
  addTodo({ commit }, payload) {
    if (payload.text) {
      commit(types.ADD_TODO, payload);
    }
  },
  deleteTodo({ commit }, payload) {
    commit(types.DELETE_TODO, payload);
  },
  toggleTodo({ commit }, payload) {
    commit(types.TOGGLE_TODO, payload);
  },
  resetFilters({ commit }) {
    commit(types.RESET_FILTERS);
  },
  updateQueryFilter({ commit }, payload) {
    commit(types.UPDATE_QUERY_FILTER, payload);
  },
  changeFilterStatus({ commit }, payload) {
    commit(types.CHANGE_FILTER_STATUS, payload);
  },
  async fetchTodos({ commit }) {
    const todos = await TodoResource.index();
    commit(types.SET_TODOS, todos);
  },
  async fetchTodo({ dispatch }, payload) {
    const todo = await TodoResource.show({
      params: {
        id: payload,
      },
    });
    dispatch('addTodo', todo);
  },
};
