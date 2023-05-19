

# Cypress and Cucumber

Nesse módulo aprendemos a utilizar Cypress com Cucumber, e uma das tarefas era realizar a instalação e configurar para rodar testes.


## Passo-a-passo

1° crie a pasta *Modulo 5*, dentro dela criei outra pasta com comando e acessei.

```bash
    mkdir projeto-cypress-cucumber
    cd projeto-cypress-cucumber
```

2° iniciei o projeto para criar o *package.json*, para isso utilizei o comando:

```bash
    npm init -y
```

3° instalei o Cypress como dependência de desenvolvimento.:

```bash
    npm install cypress --save-dev
```

4° iniciei o Cypress para criação da pasta e2e, onde fica os specs. Utilizeo o comando:

```bash
npx cypress open
   ``` 
   

5° Instalei o pacote cypress-cucumber-preprocessor para usar o Cucumber com o Cypress.

```bash
npm install cypress-cucumber-preprocessor --save-dev
   ``` 

6° Utilizei o video mencionado, pois não consegui executar a tarefa pela Masterclass

```bash
https://www.youtube.com/watch?v=TGLQN3xEnaU
   ``` 
