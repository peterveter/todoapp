import { Client } from 'r3shaper';
import request from 'request';
// import axios from 'axios';


const apiClient = new Client({
  basePath: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  apiProvider: ({ body, path, headers, method }, onError, onSuccess) => {
    request({
      url: path,
      method,
      data: body,
      headers
    }, function(err, res, body){
        onSuccess(JSON.parse(body));
    });
  },

  // fetch(path, {
  //   method,
  //   body: JSON.stringify(body),
  //   headers,
  // })
  //   .then(response => response.json())
  //   .then(response => onSuccess(response));

  // axios({
  //   url: path,
  //   data: body,
  //   headers,
  //   method: String(method).toLowerCase(),
  // })
  //   .then(({ data }) => onSuccess(data))
  //   .catch(onError);

});

export default apiClient;
