const axios = require('axios');
require('dotenv').config();

const key = process.env.MY_KEY;
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-US&page=1&sort_by=popularity.asc'

const headers = {
  Accept: 'application/json',
  Authorization: `Bearer ${key}`
};

const config = { method: 'get', url, headers }

const getMovies = async () => {
  try {
    const response = await axios(config);

    const movieList = response.data.results
      .map(movie => movie.title)
      .filter(movie => movie[0].toLowerCase() === 'a');
  
    console.log(movieList)
  } catch (error) {
    console.error('Erro!', error.message);
  } finally {
    console.log('Eu só queria usar o \'finally\'');
  }
}

getMovies();
