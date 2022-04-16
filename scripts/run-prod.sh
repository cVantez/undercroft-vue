#!/usr/bin/bash
echo "Running production ..."
cd client
echo "Building client ..."
npm run build
cd ..
if [ -d "server/log" ]; then
  echo "Log directory exists!"
else
  echo "Creating log directory ..."
  mkdir server/log
fi
echo "Running server ..."
if [ `pgrep -f forever` ]; then
  forever restart server/index.js
else
  forever start server/index.js
fi