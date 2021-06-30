import { IUser } from "../types.ts";

let users : Array<IUser> = [
    {
        username: "kenneth",
        profession: "software engineer",
        rating: 5,
        connects: { 
            names:  [{
                username: "nathalie"
                },
            ]
        },
    },
    {
        username: "nathalie",
        profession: "entrepreneur",
        rating: 10,
        connects: {}
    }
];

export default users;