![a](https://github.com/AndressaDaCosta/trilha-especializar-rocketseat/blob/main/logo_rocketseat.png?raw=true)

## Discover ➡️ Trilha Especializar

> https://app.rocketseat.com.br/discover/trails/especializar

### Sobre o Repositório:

- Repositório com a documentação do que estou aprendendo no momento, além de que isso me ajuda na fixação do conteúdo .

### Status de Desenvolvimento: 🚧🚧🚧🚧👷‍♀️🚧🚧🚧🚧 <!-- Finalizado🔋-->

> ### Módulos
>
> - [x] JavaScript assíncrono e Promises
> - [x] Trabalhando com APIs
> - [x] Fundamentos do ReactJS
> - [x] Fundamentos do Typescript
> - [x] Github para times
> - [x] Transition e Animation
> - [ ] SQL avançado
>
> ### Compartilhar Conquistas
>
> - [ ] Publicar certificado no LinkedIn e compartilhar em um Post
> - [ ] Compartilhar conquista no canal "compartilhe" do discord

---

### Falando um pouco mais sobre o repositório

#### ⬇️ Abaixo vou fazer uma lista sobre os conteudos abordados e comentar um pouco sobre meu aprendizado. ⬇️

---

- Trabalhando com APIs:
  - Gostei muito desse modulo, porque gosto dessa parte do back-end "Integração de APIS". Vou citar um pouco do que foi aprendido sobre requisições.
    - Requisições
      Temos entre os principais tipos de métodos de requisição HTTP:
      - GET: Usado para pegar informações.
      - POST: Adicionar informações.
      - PUT: Atualizar informações.
      - DELETE: remover determinada informação.
      - Certa parte do estudo foi utilizado o axios, e fetch.
        - Exemplo **sem axios**:
          - ![Sem axios](https://media.discordapp.net/attachments/996115127306829896/996789820703658024/noaxios.png?width=830&height=468)
        - Exemplo **com axios**:
          - ![Com axios](https://media.discordapp.net/attachments/996115127306829896/996789820401647696/axios.png?width=877&height=468)

---

- Fundamentos do ReactJS
  - Sobre o react, posso dizer que é um framework que vou usar no meu desenvolvimento front-end, pois gostei muito da sua organização e sua melhor escalabilidade.

---

- Fundamentos do Typescript
  - Gostei demais de usar o TypeScript, o que mais gostei foi a possibilidade de ir codando já previnindo possíveis erros o que permite um maior desempenho/produtividade.

---

- Github para Times
  - #### Comandos de branches
  - git branch
    - monstra a branch em que o usuario esta.
  - git checkout NOME DA BRANCH
    - usado para se mover entre as brenches.
  - git checkout -b "NOME"
    - usado para criar uma ramificação da branch main.
  - git merge NOME DA BRANCH
    - usado para dar merge nas brenches.
  - git push origin --delete NOME DA BRANCH
    - usado para apagar uma branch.
  - git branch -D "NOME DA BRANCH"
    - usado para apgar determiniado dado.
  - git push origin NOME DA BRANCH
    - usado para upar arquivos para o repositório online.
  - git fetch
    - usado para baixar todas as atualizações do repositório online para o repositório local.
  - git fetch -p
    - usado para atualizar o local
      -git fetch -a
    - usado para listar
  - git pull
    - usado para baixar o conteudo do repositório e fazer alterações de imediato.

---

## Transition e Animation

---

## O que é CSS transition?

Quando temos alguma propriedade css que muda de valor em um hover, focus ou outro tipo de interação, podemos usar o transition para suavizar a mudança do ponto A ate o ponto B

### Transition

- **transistion-property**
  - é a propriedade css que queremos aplicar a transição.
- **transition-duration**
  - é o tempo de duração da transição.

* Somente valores quantificáveis podem ser animados. Isso quer dizer que não é possível fazer uma animação de display indo de none para block, mas sim de opacity de 0 para 1;

- **Transition timing functions**
  - ease: Início lento, rápido e final lento (este é o padrão)
  - linear: Mesma velocidade do início ao fim
  - easy-in: Início lento
  - easy-out: Final lento
  - easy-in-out: Início e fim lentos
  - cubic-bezier(n,n,n,n): Permite definir seus próprios valores em uma função cubic-bezier.
- **transition-delay**
  - É uma propriedade CSS que permite atrasar o inicio de uma transição em uma escala de segundos.
- **Transition property all**
  - transition-property: all, é usado para aplicar transição em todos os elementos quantificáveis disponíveis e que estejam sofrendo alteração

---

## O que é CSS animation?

CSS Animations é uma ferramenta do CSS que permite criar animações sem a interação do usuário, onde elas podem acontecer de forma autônoma.

### Animation

- **animation-name**
  - é o nome da animação criada com @keyframes.
- **animation-duration**
  - é o tempo de duração da animação em uma escala de segundos.
- **@keyframe com FROM/TO**
  - é onde se passa a animação, existe 2 parametros chamados: **from**,**to**.
    - Exemplo:
      - ![exemplo:@keyframe](https://cdn.discordapp.com/attachments/996115127306829896/996115205434122290/print_keyframe.png)
- **@keyframe "com PORCENTAGEM"**
  - Essa é uma forma útil quando queremos ter uma animação que execute vários comportamentos em sua duração, então podemos colocar o inicio da animação como 0% e o fim da animação como 100%, usando qualquer outro valor de porcentagem nos referimos ao momento da duração daquela animação em porcentagem e definimos seu comportamento.
  - mesma coisa do anterior so mudamos os parametros **from**/**to** para porcentagem.
    - Exemplo:
      - ![exemplo:@keyframe](https://cdn.discordapp.com/attachments/996115127306829896/996115205186650202/print_keyframe.png)
- **animation-delay**
  - é uma propriedade CSS que permite atrasar o inicio de uma animação em uma escala de segundos
- **animation iteration count**

  - A propriedade animation-iteration-count defini quantas vezes a animação será repetida.

- **animation direction**

  - A propriedade animation-direction define a direção que a animação vai funcionar, podendo ser: normal/reverse/alternate/alternate-reverse.
    - **_normal:_** começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será também da primeira chave do @keyframes ate a ultima
    - **_reverse:_** começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será também da última chave do @keyframes ate a primeira.
    - **_alternate:_** começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será da última chave do @keyframes ate a primeira, e na próxima repetição volta a ser da primeira chave para a última e assim por diante alternando.
    - **_alternate-reverse:_** começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será da primeira chave do @keyframes ate a última, e na próxima repetição volta a ser da última chave para a primeira e assim por diante alternando.

- **animation timing function**

  - ease - Início lento, rápido e final lento (este é o padrão)
  - linear - Mesma velocidade do início ao fim
  - easy-in - Início lento
  - easy-out - Final lento
  - easy-in-out - Início e fim lentos

  ***

  - Exemplo:
    - ![exemplo](https://cdn.discordapp.com/attachments/996115127306829896/996175694902083634/GIF_11-07-2022_18-46-02.gif)

  ***

  - Codigo
    - ![codigo](https://media.discordapp.net/attachments/996115127306829896/996178772644593755/GIF_11-07-2022_19-18-22.gif)

  ***

- **Animation Fill mode**

- Determina o que é realizado quando a animação acabar
- forwards - para no ultimo lugar
- backward - volta para as caracteristicas antes do delay
- both - começa na primeira chave a acaba na ultima chave

---
