FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci
EXPOSE ${FRONTEND_PORT}
ENTRYPOINT npm run dev -- --port ${FRONTEND_PORT} --host