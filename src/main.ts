import { Server } from "./server";

new Server().start().catch((error: unknown) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
