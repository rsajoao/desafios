const axios = require('axios');
require('dotenv').config();

const key = process.env.MY_KEY;
const url = 'https://api.themoviedb.org/3/authentication'

const headers = {
  Accept: 'application/json',
  Authorization: `Bearer ${key}`
};

const config = { method: 'get', url, headers }

const getMovies = async () => {
  try {
    const response = await axios(config);
    console.log(response.status)
  } catch (error) {
    console.error('Erro!', error.message);
  } finally {
    console.log('Eu só queria usar o \'finally\'');
  }
}

getMovies();
