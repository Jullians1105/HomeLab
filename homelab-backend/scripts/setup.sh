#!/bin/bash
set -e

echo "🚀 Setup Backend Homelab Dashboard"
echo "===================================="

echo "📦 Installing dependencies..."
npm install

if [ ! -f .env ]; then
  echo "⚙️  Creating .env..."
  cp .env.example .env
else
  echo "⚙️  .env ya existe, no se sobrescribe"
fi

echo "🐳 Starting Docker containers..."
npm run docker:up

echo "⏳ Waiting for PostgreSQL..."
sleep 10

echo "🌱 Seeding database..."
npm run seed

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  npm run dev         → Start dev server"
echo "  npm run docker:down → Stop Docker"
