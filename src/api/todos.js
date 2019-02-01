import apiClient from './';
import { todoEndpoints } from '../constants/endpoints';

const normalizeTodo = todo => ({
  id: todo.id,
  text: todo.title,
  done: todo.completed,
});

export const TodoResource = {
  index: apiClient.get(todoEndpoints.index, {
    onResponse: response => response.map(normalizeTodo),
  }),

  show: apiClient.get(todoEndpoints.show, {
    onResponse: normalizeTodo,
  }),
};
