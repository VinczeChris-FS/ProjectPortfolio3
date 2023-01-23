# Project and Portfolio III: Web Development - Online

## Spotify Music Search App

Term: 2301 (January 2023)

Instructor: Justin Workman

## Project Overview

This project is a music search app that performs a global search for Artists, Albums, and Tracks from Spotify and uses the [Spotify Web API](https://developer.spotify.com/documentation/web-api/). This project contains both a front-end and back-end and uses OAuth 2.0 JSON Web Tokens (JWTs) for user authorization.

## Prerequisites

- NodeJS >= v16.16.0
- NPM >= v8.11.0
- React 18.2.0
- MongoDB Compass >= v1.33.1
- Chrome/Firefox/Safari/Edge >= Latest 2 major versions

## Getting Started

### Spotify for Developers Dashboard

[Dashboard Login](https://developer.spotify.com/dashboard/login)

Get _Client ID_ and _Client Secret_ for Spotify API.

Edit Settings > Redirect URI `https://localhost:3000`

---

### Create React App

For local React app, first cd into _reactjs_ folder.

```
cd reactjs
npx create-react-app
```

### Install React dependencies

```
npm install axios spotify-web-api-node
```

### To Run React.js (front-end)

```
npm start
```

---

### Initialize Node.js

For local server/API, first cd into _api_ folder.

```
cd api
npm init -y
```

### Install Node.js back-end dependencies

```
npm install express dotenv cors spotify-web-api-node mongoose
```

### Install Node.js back-end dev dependencies

```
npm install install nodemon -D
```

### To Run Express (back-end)

```
npm run dev
```

## Links

The links to the project are as follows:

- [http://localhost:3000](http://localhost:3000) - Link to the frontend application. This is the primary user interface of this Spotify music search application
- [http://localhost:3001](http://localhost:3001) - Link to the backend (Express) API.
- [http://localhost:3001/spotify/v1](http://localhost:3001/spotify/v1) - Link to the Spotify API middleware.
- [http://localhost:3001/spotify/v1/login](http://localhost:3001/spotify/v1/login) - Endpoint to request a new JWT from Spotify using the authentication workflow.
- [http://localhost:3001/spotify/v1/refresh](http://localhost:3001/spotify/v1/refresh) Endpoint to refresh access token from Spotify.
- [http://localhost:3001/spotify/v1/access_token](http://localhost:3001/spotify/v1/access_token) Endpoint to store access token from Spotify to database.

## Resources

- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/)
- [Spotify for Developers - Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization/code-flow/)
- [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [Using .env File in ReactJS](https://medium.com/how-to-react/using-env-file-in-react-js-b2714235e77e)
- [How to Structure React Projects from Beginner to Advanced](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)
- [Spotify Web API Node](https://www.npmjs.com/package/spotify-web-api-node)
- [Spotify Web API Node on GitHub](https://github.com/thelinmichael/spotify-web-api-node#installation)

## Misc

Since I have two GitHub accounts, I needed to change the email for this repository to commit with the correct account.

To set the Git email for a single repository:

    git config user.email "VinczeChris-FS"

To confirm:

    git config user.email
    > VinczeChris-FS
