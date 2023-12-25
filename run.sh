#!/bin/bash

# Check if an argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 $1"
  exit 1
fi

sh ./bin/start.sh $1