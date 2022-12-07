#!/usr/bin/env bash
git pull origin main
npm install yarn -g 
yarn install
yarn build 
yarn export
sudo service nginx reload 
