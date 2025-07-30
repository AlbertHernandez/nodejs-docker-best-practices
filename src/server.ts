import express, { Express } from "express";
import http from "node:http";
import { config } from "./config";

export class Server {
  private readonly app: Express;
  private httpServer?: http.Server;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });
  }

  async start(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
}
