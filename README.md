# Teste-CARUPI
Teste para vaga de desenvolvedor Back-End

API tem foco em auxiliar no cadastro, listagem, atualização e deleção de carros.

# __Tecnologias utilizadas__

- Editor de Texto: VS Code
- Npm
- NodeJs
- Express
- Joi
- Jest
- Eslint
- Mongoose


# __Configuração para Desenvolvimento__

#### __Instalar as dependencias com__:
```
npm install 
```

#### __subir container com a imagem do DB usado__:
```
docker-compose up
```

#### __Para iniciar a aplicação__:
```
npm run dev
```

#### __Para iniciar os testes da aplicação__:
```
npm run test
```

# __Consumo da Api__

#### __Porta utilizada__: 3000
#### __Rotas de GET e POST__: /cars
#### __Rotas de GET, PUT e DELETE__: /cars/:carId

#### __Variaveis fornecidas para o POST dentro do body__:

#### make: 'xpto',
#### model: 'xpto',
#### version: 'xpto',
#### year: 1999,
#### mileage: 10,
#### car_shift: 'xpto',
#### sale_price: 12.50
