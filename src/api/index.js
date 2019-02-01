import axios from 'axios';
import { Client } from 'r3shaper';

const apiClient = new Client({
  basePath: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
  apiProvider: ({ body, path, headers, method }, onError, onSuccess) =>
    axios({
      url: path,
      data: body,
      headers,
      method: String(method).toLowerCase(),
    })
      .then(({ data }) => onSuccess(data))
      .catch(onError),
});

export default apiClient;