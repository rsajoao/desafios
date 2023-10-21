const axios = require('axios');

const key = ''
const url = ''

const headers = {
  Accept: 'application/json',
  Authorization: `Bearer ${key}`
};

const config = { method: 'get', url, headers }

const getMovies = async () => {
  try {
    const response = await axios(config);
    console.log(response.data.results)
  } catch (error) {
    console.error('Erro!', error.message);
  } finally {
    console.log('Eu só queria usar o \'finally\'');
  }
}

getMovies();
