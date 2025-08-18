import { Elysia } from "elysia";

let cont = 0;

const app = new Elysia()
  .get("/pong", async () => {
    fetch("http://192.168.209.154:8000/ping", { method: "GET" });

    cont++;
    console.log(`Pongou! ${cont}`);
    return `Pongou! ${cont}`;
  })
  .listen(3000);

console.log(`Pongou na porta ${app.server?.hostname}:${app.server?.port}`);
