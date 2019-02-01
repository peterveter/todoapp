import * as types from '../constants/mutationTypes';
import statusFilters from '../constants/statusFilters';
import uuid from 'uuid/v1';

export default {
  [types.ADD_TODO](state, payload) {
    state.todos = [...state.todos, { id: uuid(), done: false, ...payload }];
  },
  [types.DELETE_TODO](state, payload) {
    state.todos = state.todos.filter(todo => todo.id !== payload);
  },
  [types.TOGGLE_TODO](state, payload) {
    state.todos = state.todos.map(todo => {
      if (todo.id === payload) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });
  },
  [types.RESET_FILTERS](state) {
    state.filterQuery = '';

    state.filterStatus = statusFilters.ALL;
  },
  [types.UPDATE_QUERY_FILTER](state, payload) {
    state.filterQuery = payload;
  },
  [types.CHANGE_FILTER_STATUS](state, payload) {
    state.filterStatus = payload;
  },
  [types.SET_TODOS](state, payload) {
    state.todos = payload;
  },
};
