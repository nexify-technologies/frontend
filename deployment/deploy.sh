#!/usr/bin/env bash
git pull origin main
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
yarn install
yarn build 
yarn export
echo "paulteli" | sudo -S service nginx reload 
