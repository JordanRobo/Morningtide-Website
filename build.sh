#!/bin/bash

# Load environment variables from .env file
set -a
source .env
set +a

# Get current timestamp for versioning
VERSION=$(date +%Y%m%d-%H%M%S)

echo "Building morningtide:$VERSION and morningtide:latest"

# Build with the environment variables
docker buildx build --platform linux/arm64,linux/amd64 \
  --build-arg ORIGIN="$ORIGIN" \
  --build-arg GHOST_URL="$PUBLIC_GHOST_URL" \
  --build-arg GHOST_KEY="$PUBLIC_GHOST_KEY" \
  --build-arg PB_URL="$PUBLIC_PB_URL" \
  -t jordanrobo22/morningtide:$VERSION \
  -t jordanrobo22/morningtide:latest \
  --push .

echo "Built and pushed:"
echo "  jordanrobo22/morningtide:$VERSION"
echo "  jordanrobo22/morningtide:latest"
