# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```shell
yarn install
```

## Local Development

```shell
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```shell
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Bump Version
```shell
npm run docusaurus docs:version 3.22
```

## Generate PDF
```shell
npm install -g docs-to-pdf@v0.6.2
npx docs-to-pdf docusaurus --initialDocURLs="https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/" --contentSelector="article" --paginationSelector="div.pagination-nav__item.pagination-nav__item--next > a.pagination-nav__link"
```
