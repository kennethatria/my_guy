import { Application, send } from "https://deno.land/x/oak/mod.ts";

import router from "./routes.ts";

const env = Deno.env.toObject()
const PORT = Number(env.PORT) || 8000;
const HOST = env.HOST || "localhost";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/client/dist/myguy-deno`,
        index: "index.html"
    });
});

console.log(`Listening on ${HOST}:${PORT}...`);

await app.listen(`${HOST}:${PORT}`);