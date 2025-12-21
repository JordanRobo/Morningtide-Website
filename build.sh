#!/bin/bash

# Get current timestamp for versioning
VERSION=$(date +%Y%m%d-%H%M%S)

echo "Building morningtide:$VERSION and morningtide:latest"

# Build for your current platform only
docker build \
  -t jordanrobo22/morningtide:$VERSION \
  -t jordanrobo22/morningtide:latest .

# Push both tags
docker push jordanrobo22/morningtide:$VERSION
docker push jordanrobo22/morningtide:latest

echo "Built and pushed:"
echo "  jordanrobo22/morningtide:$VERSION"
echo "  jordanrobo22/morningtide:latest"
