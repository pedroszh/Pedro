# Automação de Pipeline com Docker e GitHub Actions

Este projeto configura uma aplicação web com três componentes independentes: front-end (React), back-end (Node.js e Express) e banco de dados (PostgreSQL). Cada componente é empacotado usando Docker e tem seu próprio Dockerfile para gerenciar dependências e configurações específicas.

A automação foi realizada com GitHub Actions, configurando dois workflows:
- **Build and Test**: Compila e testa cada imagem Docker separadamente em pushes e pull requests para a branch `main`.
- **Deploy**: Após a aprovação dos testes, as imagens Docker são enviadas para o Docker Hub e simulam o envio para o ambiente de produção.
