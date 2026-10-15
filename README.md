# Portfólio — Charles Paiva

Portfólio profissional de Charles Paiva, desenvolvedor full-stack com forte
atuação em backend Java, Kotlin e Spring Boot e experiência frontend com
Angular e TypeScript.

## Tecnologias

- Angular 22
- TypeScript 6
- SCSS
- Vitest
- GitHub Actions e GitHub Pages

## Desenvolvimento local

Instale as dependências:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação estará disponível em `http://localhost:4200`.

## Validação

```bash
npm test -- --watch=false
npm run build
```

## Publicação

O workflow `.github/workflows/deploy-pages.yml` compila e publica o site no
GitHub Pages a cada push para a branch `main`.

No repositório do GitHub, configure **Settings → Pages → Source** como
**GitHub Actions** antes da primeira publicação.
