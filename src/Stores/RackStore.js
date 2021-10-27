import { writable } from "svelte/store";

const RackStore = writable(
    [
          {
              Id: 1,
              Name: "Klassiker",
          } ,  
          {
            Id: 2,
            Name: "Action"
        },
        {
            Id: 3,
           Name: "Thriller"
        }
    ]);

    export default RackStore;