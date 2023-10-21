const axios = require('axios');
require('dotenv').config();

const key = process.env.MY_KEY;
const language = 'pt'
const firstLetter = 'A'
const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}-US&page=1&sort_by=popularity.desc`

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
      .filter(movie => movie[0].toLowerCase() === firstLetter.toLowerCase());
  
    console.log(movieList)
  } catch (error) {
    console.error('Erro!', error.message);
  }
}

getMovies();
