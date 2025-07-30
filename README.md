# 🐳 NodeJS Docker Best Practices

This repository contains a ready-to-use example of **Docker best practices for Node.js projects**, with a focus on creating fast, secure, and production-ready images.

## ✅ What’s included

This project applies several best practices to keep your Docker builds clean, fast, and efficient:

- 🏗️ **Multi-stage builds** to separate dependencies and reduce final image size.
- 🐋 **Alpine-based Node.js image** (`node:22-alpine3.20`) for a smaller and safer footprint.
- 🧼 **`dumb-init` as PID 1** to handle signals and zombie processes properly in production.
- 📦 **Dependency pruning** (`npm prune --production`) to ship only what you need.
- 📁 **`.dockerignore`** file to reduce build context and speed up builds.
- 📜 **Non-root user** (`node`) for better security.
- 🚀 **Fast build time** (around 7 seconds) and **small image size** (just ~160MB).
- 📋 Optimized layer caching
- 🔧 TypeScript compilation in build stage, shipping only compiled JavaScript.
- 📊 Minimal attack surface - only production dependencies in final image.

## 🚀 Build and run

### 1. Build the Docker image

```bash
docker build . -t nodejs-docker-best-practices
```

### 2. Run the container

```bash
docker run -e PORT=3000 -p 3000:3000 nodejs-docker-best-practices
```

This setup is ideal as a base for your production deployments. Feel free to clone it, adapt it, and use it as a reference in your own projects!
