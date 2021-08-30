/*POST
import axios from 'axios';

const URL = 'http://localhost:8080/';

export default {
    async postForm(dados) {
        return await axios.post(URL, dados)
  }
};

import axios from "axios";

const URL = "http://localhost:8080/api";

export default {
  async postForm(dados) {
    return await axios.post(URL, dados);
  },
  async createUser(dados) {
    console.log("dados", dados);
    return await axios.post(`${URL}/auth/registrar/`, dados);
  }
};
*/