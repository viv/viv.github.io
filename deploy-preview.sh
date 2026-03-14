#!/bin/bash
set -euo pipefail

PREVIEW_HOST="${PREVIEW_HOST:?Set PREVIEW_HOST to preview server hostname (e.g. via direnv)}"
PREVIEW_PORT="${PREVIEW_PORT:-8090}"         # Port to expose on preview server
CONTAINER_NAME="viv-preview"
IMAGE_NAME="viv-preview:latest"

echo "==> Building site..."
npm run build

echo "==> Building Docker image..."
docker build --platform linux/amd64 -f Dockerfile.preview -t "$IMAGE_NAME" .

echo "==> Shipping image to Preview Server..."
docker save "$IMAGE_NAME" | ssh "$PREVIEW_HOST" /usr/local/bin/docker load

echo "==> Deploying on Preview Server..."
ssh "$PREVIEW_HOST" bash -s "$CONTAINER_NAME" "$IMAGE_NAME" "$PREVIEW_PORT" <<'REMOTE'
CONTAINER_NAME="$1"
IMAGE_NAME="$2"
PREVIEW_PORT="$3"

# Stop and remove existing container if running
/usr/local/bin/docker rm -f "$CONTAINER_NAME" 2>/dev/null || true

# Start new container
/usr/local/bin/docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p "$PREVIEW_PORT":80 \
  "$IMAGE_NAME"
REMOTE

echo ""
echo "==> Done!"