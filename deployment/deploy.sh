#!/usr/bin/env bash
git pull origin main
yarn install
yarn build 
yarn export
echo "paulteli" | sudo -S service nginx reload 
