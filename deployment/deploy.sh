#!/usr/bin/env bash
git pull origin main
yarn install
yarn build 
yarn export
sudo service nginx reload 
