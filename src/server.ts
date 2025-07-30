import express, { Express } from "express";
import http from "node:http";

export class Server {
  private readonly app: Express;
  private httpServer?: http.Server;

  constructor(
    private readonly configuration: { port?: number } = { port: 3000 },
  ) {
    this.app = express();
    this.app.use(express.json());
    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });
  }

  async start(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.app.listen(this.configuration.port, () => {
        console.log(`Server is running on port ${this.configuration.port}`);
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
