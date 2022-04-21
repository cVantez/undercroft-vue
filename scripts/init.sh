#!/usr/bin/bash
echo "Initializing Undercroft ..."
echo "Installing server ..."
npm install
cd client
echo "Installing client ..."
npm install
echo "Building client ..."
npm run build
cd ..
echo "Installation complete"
echo "* For development:"
echo "  > npm run dev"
echo "* For production:"
echo "  Make sure you have forever installed (npm i -g forever), then"
echo "  > npm run start"