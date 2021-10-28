import { writable } from "svelte/store";

const MovieStore = writable(
    [
          {
              Id: 1,
              Title: "Rambo",
              Year: 1984,
              Genre: "Action"
          } ,  
          {
            Id: 2,
            Title: "Rambo 2",
            Year: 1988,
         
            Genre: "Action"
        },
        {
            Id: 3,
            Title: "Gudfaren",
            Year: 1972,
            Genre: "Klassiker"
        },
        {
            Id: 4,
            Title: "Gudfare2",
            Year: 1977,
            Genre: "Klassiker"
        },
        {
            Id: 5,
            Title: "Gudfaren3",
            Year: 1981,
            Genre: "Klassiker"
        }
    ]);

    export default MovieStore;