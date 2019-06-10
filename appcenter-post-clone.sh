#!/usr/bin/env bash

npm cache clean --force
npm install
npm install -g fsevents
npm install -g bcrypt
node-gyp configure