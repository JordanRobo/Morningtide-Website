# Use the official Node.js 18 image as the base (Bun requires Node.js >= 18)
FROM node:18

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files (or bun.lockb if using Bun lockfile)
COPY bun.lockb ./

# Install dependencies with Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the Sveltekit application
RUN bun run build

# Expose the port the application will run on (adjust if different)
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start", "--host", "0.0.0.0", "--port", "3000"]