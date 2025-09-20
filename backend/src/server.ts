import app from "./app";
import config from "./app/config";
import { Server } from "http";

const port = config.port;

let server: Server;

async function main() {
  try {
    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

// unhandled rejection
process.on("unhandledRejection", () => {
  console.log("Unhandled Rejection is detected. Shutting down.......");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log("Uncaught Exception is detected. Shutting down.......");
  process.exit(1);
});
