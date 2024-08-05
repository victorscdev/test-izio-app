## Desafio Front-End

### Objetivo
Demonstrar habilidades na construção de front-end, utilizando Angular ou Flutter, através do desenvolvimento de uma aplicação interativa e responsiva que consome dados de uma API externa.

### Descrição
Desenvolver uma aplicação web que consuma a API do [The Dog API](https://thedogapi.com/), um repositório online com informações detalhadas sobre raças de cachorros. A aplicação deve ser capaz de:

1. Consumir o endpoint `https://api.thedogapi.com/v1/breeds`.
    - trazer os elementos de forma paginada
3. Listar as raças de cachorros em um grid responsivo (6 colunas no web e 2 no mobile).
4. Cada elemento da lista deve apresentar:
    - Nome da raça.
    - Lista de características/temperamento da raça.
    - Imagem de um cachorro da raça (disponível em outro endpoint da API).

Ao clicar em um elemento da lista, exibir um modal com mais informações sobre a raça, como peso, altura, origem, expectativa de vida, etc.

### Requisitos
- Utilizar Angular ou Flutter (de acordo com a vaga pretendida).
- Organizar o código em componentes e respeitar os princípios do SOLID.
- Utilizar Git para versionamento do código.
- Realizar testes unitários.
- Preferencialmente, utilizar Angular Material ou Flutter Material para estilização dos componentes (SAAS ou BEM).