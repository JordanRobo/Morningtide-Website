# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun

# Set the working directory inside the container
WORKDIR /app

# Define build arguments for your environment variables
ARG GHOST_URL
ARG GHOST_KEY
ARG PB_URL
ARG GETRESPONSE_KEY

# Set environment variables using the build arguments
ENV GHOST_URL=${GHOST_URL}
ENV VITE_GHOST_KEY=${GHOST_KEY}
ENV PB_URL=${PB_URL}
ENV GETRESPONSE_KEY=${GETRESPONSE_KEY}

# Copy package.json and bun.lockb (if you have one) to the working directory
COPY package*.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of your app's source code to the working directory
COPY . .

# Build your SvelteKit app
RUN bun run build

# Expose the port on which your app will run (adjust if needed)
EXPOSE 3000

CMD [ "bun", "start" ]