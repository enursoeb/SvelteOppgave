import { writable } from "svelte/store";

const MovieStore = writable(
    [
          {
              Id: 1,
              Title: "Rambo",
              Year: 1984,
              MainActor: "Sylvester Stallone",
              Rack: "Action"
          } ,  
          {
            Id: 2,
            Title: "Rambo 2",
            Year: 1988,
            MainActor: "Sylvester Stallone",
            Rack: "Action"
        },
        {
            Id: 3,
            Title: "Gudfaren",
            Year: 1972,
            MainActor: "Marlon Brando",
            Rack: "Klassiker"
        }
    ]);

    export default MovieStore;