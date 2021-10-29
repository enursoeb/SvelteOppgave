import { writable } from "svelte/store";

const MovieStore = writable(
    [
          {
              Id: 1,
              Title: "Rambo",
              Year: 1984,
              Genre: "Action",
              Rack: "Stallone",
              Poster: "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg"
          } ,  
    ]);

    export default MovieStore;