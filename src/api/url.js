const Api_key = "09859b0c5ca5e35a733a5a5e2834bca7";
export const baseUrl = `https://api.themoviedb.org/3`;
export const fetchCategory_api = `${baseUrl}/genre/movie/list?api_key=${Api_key}&language=en-US`;
export const fetchMovieById = `${baseUrl}/discover/movie?api_key=${Api_key}&with_genres=`;
export const fetchForHome=`${baseUrl}/trending/all/day?api_key=${Api_key}`;


// export const api = {
// fetchTrending: {
// title: "trending",
// url: `/trending/all/day?api_key=${Api_key}`,

// },
// fetchTopRated: {
// title: "Top Rated",
// url: `/genre/movie/list?api_key=${Api_key}&language=en-US`,
// },
// fetchActionMovies: {
// title: "action",
// url: `/discover/movie?api_key=${Api_key}&with_genres=28`,
// },
// fetchComedyMovies: {
// title: "comedy",
// url: `/discover/movie?api_key=${Api_key}&with_genres=35`,
// },
// fetchRomanticMovies: {
// title: "romantic",
// url: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
// },
// fetchHorrorMovies: {
// title: "horror",
// url: `/discover/movie?api_key=${Api_key}&with_genres=27`,
// },
// fetchThrillerMovies: {
// title: "Thriller",
// url: `/discover/movie?api_key=${Api_key}&with_genres=53`,
// },
// };