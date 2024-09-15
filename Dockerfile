FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/node_modules /app/node_modules

COPY --from=builder /app/dist /app/dist

COPY --from=builder /app/.env /app/.env

COPY --from=builder /app/tsconfig.json /app/tsconfig.json

CMD ["node", "dist/app.js"]

EXPOSE 3000