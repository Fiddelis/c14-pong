import { Elysia } from "elysia";

let count = 0;

const app = new Elysia()
  .get("/pong", async () => {
    fetch("http://192.168.209.219:8000/ping", { method: "GET" });

    count++;
    console.log(`Pongou!!!! ${count}`);
    return `Pongou! ${count}`;
  })
  .get("/pong/count", async () => {
    return count;
  })
  .listen(3000);

console.log(`Pongou na porta ${app.server?.hostname}:${app.server?.port}`);
