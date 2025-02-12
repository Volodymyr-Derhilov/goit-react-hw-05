import axios from "axios";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDI0MWM1NzY4NWExNzk0NDkzNjI1MjMxOWRiNjRiNCIsIm5iZiI6MTczOTEyOTYwNy43ODQsInN1YiI6IjY3YTkwMzA3MjRiYmZjNjUyMTkzNjExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gjNwxxdLQ94lXCpHfiXgPgxtnRMoVt4z6lk6iRC1XuI",
  },
};

const trendingMovies =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

export default async function fetchMovies() {
  const response = await axios.get(trendingMovies, options);
  return response.data;
}

export async function getMovieById(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    options
  );
  return response.data;
}

export async function getMovieCastById(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    options
  );
  return response.data;
}

export async function getMovieReviewsById(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    options
  );
  return response.data;
}

export async function getMoviesByQuery(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    options
  );
  return response.data;
}
