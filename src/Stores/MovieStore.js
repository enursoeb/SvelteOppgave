import { writable } from "svelte/store";

const MovieStore =  writable(
    [
        // {
        //     Id: 1,
        //     Title: "Rambo",
        //     Year: 1984,
        //     Genre: "Action",
        //     Rack: "Stallone",
        //     Poster: "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg"
        // },

        // {
        //     Id: 2,
        //     Title: "Elling",
        //     Year: 2001,
        //     Genre: "Comedy",
        //     Rack: "Norsk",
        //     Poster: "https://m.media-amazon.com/images/M/MV5BMzczMzg1NzM3Nl5BMl5BanBnXkFtZTYwNjQ5ODc5._V1_SX300.jpg"
        // },
        
        // {
        //     Id: 3,
        //     Title: "Titanic",
        //     Year: 1997,
        //     Genre: "Drama",
        //     Rack: "Oscar-vinnere",
        //     Poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        // },
        // {
        //     Id: 4,
        //     Title: "Die Hard",
        //     Year: 1988,
        //     Genre: "Action",
        //     Rack: "Kultfilmer",
        //     Poster: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        // }

    ]);

export default MovieStore;