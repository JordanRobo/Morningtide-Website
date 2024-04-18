FROM oven/bun

WORKDIR /app

COPY package*.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run build

RUN rm .env
RUN rm -rf src static node_modules .svelte-kit

EXPOSE 3000

CMD ["bun", "start", "--prod"]