# Dicas sobre node

## Sair de programa em node

process.exit(1)

ou

process.exitCode = 1

## Formato de mensagens

console.log('My %s has %d ears', 'cat', 2)

%s format a variable as a string
%d format a variable as a number
%i format a variable as its integer part only
%o format a variable as an object

Example:
console.log('%o', Number)

console.clear()

## Definindo padrão para arquivo de entrada

Eu gosto de usar o nome do arquivo de entrada do apliucativo, de index.js. Parece que podemos usar qualquer nome, mas é produtivo definir um padrão.

## Aplicativo mais prático

A final do arquivo index.js, gosto de adicionar o seguinte:

console.log('http://localhost:porta')

Assim quando digito

node index

Ele me mostra

http://localhost:3000

Como um link clicável com Ctrl+clique e já abre o apliicativo no navegador


