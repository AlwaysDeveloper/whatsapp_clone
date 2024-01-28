#!/bin/sh

# Check if two arguments are provided
if [ -z "$1" ]; then
  echo "Usage: $0 <environment> [<additional_arguments>]"
  exit 1
fi

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

# Shift to the next argument after $1 (environment)
shift

# Run npm based on the provided argument
case "$1" in
  local)
    npm run migrate:dev "$@"  # Pass all remaining arguments to the npm script
    ;;
  test)
    npm run migrate:test "$@"  # Pass all remaining arguments to the npm script
    ;;
  *)
    echo "Invalid environment: $1"
    exit 1
    ;;
esac

# Check if additional arguments are provided
if [ $# -eq 0 ]; then
  echo "Error: Additional arguments are required."
  exit 1
fi

echo "Additional arguments passed: $@"
