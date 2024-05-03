# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and bun.lockb (if you have one) to the working directory
COPY package.json ./
COPY bun.lockb ./ 

# Install dependencies
RUN bun install

# Copy the rest of your app's source code to the working directory
COPY . .

# Build your SvelteKit app
ENV NODE_ENV=production
RUN bun run build

# Expose the port on which your app will run (adjust if needed)
EXPOSE 3000

ENTRYPOINT [ "bun", "start" ]