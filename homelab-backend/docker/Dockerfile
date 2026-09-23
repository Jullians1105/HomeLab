FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY tsconfig.json ./
COPY src ./src
RUN npm install typescript && npx tsc && npm prune --omit=dev

EXPOSE 3001

CMD ["node", "dist/main.js"]
