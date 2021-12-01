# shongshoy-app

This is shongshoy.com Headless App project which is bootstrapped with [Frontity](https://frontity.org/).

#### Table of Contents

- [Clone the git repository](#clone-the-git-repository)
- [Launch a development server](#launch-a-development-server)
- [Create a production-ready build](#create-a-production-ready-build)
- [Deploy](#deploy)

### Clone the git repository

```
git clone https://github.com/asifmoh/shongshoy.com.git
```
### Launch a development server

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.


### Create a production-ready build

```
npx frontity build
```

Builds the app for production to the `build` folder.

This will create a `/build` folder with a `server.js` (a [serverless function](https://vercel.com/docs/v2/serverless-functions/introduction)) file and a `/static` folder with all your javascript files and other assets.

Your app is ready to be deployed.

### Deploy

With the files generated in the _build_ you can deploy your project.

#### As a node app

Use `npx frontity serve` to run it like a normal Node app.

This command generates (and runs) a small web server that uses the generated `server.js` and `/static` to serve your content.

#### As a serverless service

Upload your `static` folder to a CDN and your `server.js` file to a serverless service, like Vercel or Netlify.

> Get more info about [how to deploy](https://docs.frontity.org/deployment) a Frontity project

---
