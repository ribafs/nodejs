# Instalação do Node, npm e yarn

## Instalação para Windows e Mac usa-se binários baixados de

https://nodejs.org/en


## Instalação no Linux Mint 21

curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -

sudo apt-get install -y nodejs

node -v

npm -v

## Instalar yarn

sudo npm install yarn -g

## Executar sem SSL

npm set strict-ssl false

sudo npm config set registry http://registry.npmjs.org/

