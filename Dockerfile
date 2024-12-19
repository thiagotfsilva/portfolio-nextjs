FROM node:22 AS base

WORKDIR /app

COPY package.json package-lock.json* ./ 

RUN npm install

COPY . .

RUN npm run build

FROM node:22 AS runner

WORKDIR /app

COPY --from=base /app/public ./public
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json

ENV NODE_ENV production

EXPOSE 3000

CMD ["npm", "start"]
