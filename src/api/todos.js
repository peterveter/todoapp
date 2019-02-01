import apiClient from './';
import { todoEndpoints } from '../constants/endpoints';

const normalizeTodo = ({ id, title, completed }) => ({
  id: id,
  text: title,
  done: completed,
});

export const TodoResource = {
  index: apiClient.get(todoEndpoints.index, {
    onResponse: response => response.map(normalizeTodo),
  }),

  show: apiClient.get(todoEndpoints.show, {
    onResponse: normalizeTodo,
  }),
};
