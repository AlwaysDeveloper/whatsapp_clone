#!/bin/bash

# Find the 'apps' directory dynamically
SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
APPS_DIR="$SCRIPT_DIR/../apps"

# Check if the 'apps' directory exists
if [ ! -d "$APPS_DIR" ]; then
  echo "Error: 'apps' directory not found."
  exit 1
fi

# Change directory to 'apps'
cd "$APPS_DIR" || exit 1

# Check if an environment argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <environment>"
  exit 1
fi

# Run Sequelize migration for the specified environment
npx sequelize-cli db:migrate --env "$1"
