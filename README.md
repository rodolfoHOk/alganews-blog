# AlgaNews Blog

> Este é um dos 3 projetos interligados do curso Especialista React JS da AlgaWorks

> O projeto geral segue o briefing:
> https://www.notion.so/Documentos-8dca4ded101d42478b6bc2f2c7a0fb46

> O projeto do blog segue o briefing:
> https://www.notion.so/Briefing-Blog-256d9f6ae1c24fbfb73e095b3c665de4

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/alganews-blog-1.png" alt="AlgaNews Blog Img1" width="450"/>

## Tecnologias utilizadas:

- Typescript: Programação do cliente
- React JS: Programação de interface
- Next JS: Renderização do lado do servidor (Server Side Render - SSR)
- REST: Comunicação com a API/Database
- Discus: Comentários/interações

### Bibliotecas utilizadas:

- date-fns: utilitário de datas
- disqus-react: utilitário do Discus para o React JS
- polished: adicionar transparências nas cores principais de projeto
- react-markdown: utilitário de Markdown para o React JS
- react-paginate: adicionar paginação nas páginas do blog
- react-syntax-highlighter: adicionar marcador de sintaxe no react-markdown
- remark-gfm: adicionar plugins no react-markdown (react-syntax-highlighter)
- rodolfohiok-sdk: SDK criado durante o curso para reutilização nos outro projetos;
  contendo as tipagens do typescript, os serviços para comunicação com a API,
  e as classes de erros utilizadas no projeto.
- styled-components: estilização dos componentes do React JS

#### react-markdown:

obs: É uma abstração do remarkjs. Plugins do remark funcionam no react-markdown.
Utilizamos o plugin gfm (github flavored markdown spec) que é um superset do CommonMark spec.

## Outras imagens

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/alganews-blog-3.png" alt="AlgaNews Blog Img3" width="450"/>

## Credits:

### SVG to react component:

SGV Playground - https://react-svgr.com/playground/

### SVG not found:

storyset - https://storyset.com/

### open graph:

open graph generator: https://smallseotools.com/open-graph-generator/
obs: Social Share Preview - Extensão do Chrome ou Firefox para visualizar o open graph.

## BackEnd Local

Para executar o back-end localmente utilizamos containers do docker.

Localização:
/repositorio/Programacao/cursos/algaworks/ERJS-EspecialistaReactJS/alganews-infra/

Comando de execução:
docker-compose up -d

## Deployed URL

https://alganews-blog-rodolfohok.vercel.app/
