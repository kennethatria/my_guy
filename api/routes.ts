import { Router } from "https:/deno.land/x/oak/mod.ts";

import {
    getUsers,
    getUser,
    addUser,
} from "./controllers/users.ts";

const router = new Router();

router
    .get("/api/users", getUsers)
    .get("/api/users/:url", getUser)
    .put("/api/users", addUser);

export default router;