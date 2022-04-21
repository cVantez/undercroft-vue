#!/usr/bin/bash
echo "Running development ..."
cd client
echo "Building client ..."
npm run build
cd ..
echo "Running server ..."
nodemon server/index.js