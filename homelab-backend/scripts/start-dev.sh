#!/bin/bash
set -e

echo "🐳 Starting Docker containers (Postgres + Redis)..."
npm run docker:up

echo "🚀 Starting backend in dev mode..."
npm run dev
