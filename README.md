# Project and Portfolio III: Web Development - Online

Term: 2301 (January 2023)

Instructor: Justin Workman

## Project Overview

This project is a music search app that performs a global search for Artists, Albums, and Tracks from Spotify and uses the [Spotify Web API](https://developer.spotify.com/documentation/web-api/). This project contains both a front-end and back-end and uses OAuth 2.0 JSON Web Tokens (JWTs) for user authorization.I

## Prerequisites

- NodeJS >= v16.16.0
- NPM >= v8.11.0
- MongoDB Compass >= v1.33.1
- Chrome/Firefox/Safari/Edge >= Latest 2 major versions

## Getting Started

In order to setup the project we will need to setup our `.env` file. You can do this by making a copy of our `.env.dist` and naming it to `.env` using the following command.

    cp .env.dist .env && vim .env

Place all of your environment variables inside the vim window, then save. After you have done that you will need to install all of your `node_modules` using the following command. Make sure you have yarn installed globally as well.

    npm install -g yarn
    yarn

After yarn has finished installing all of your `node_modules` you can now run the project. You will need to open two different bash sessions. One for the frontend app and one for the backend Express application.

### Install dependencies

```
npm install express dotenv mongoose
```

### Install dev dependencies

```
npm install install nodemon -D
```

**To Run React.js (frontend)**

```
npm start
```

**To Run Express (backend)**

To run local server, first cd into _api_ folder.

```
cd api
npm run dev
```

## Links

The links to the project are as follows:

- [http://localhost:3000](http://localhost:3000) - Link to the frontend application. This is the primary user interface of the Spotify application
- [http://localhost:3001](http://localhost:3001) - Link to the backend (Express) API.
- [http://localhost:3001/spotify/v1](http://localhost:3001/spotify/v1) - Link to the Spotify API middleware.
- [http://localhost:3001/spotify/v1/status](http://localhost:3001/spotify/v1/status) - Endpoint to check the status of our application's JWT. Returns true if a valid JWT exists. False otherwise.
- [http://localhost:3001/spotify/v1/login](http://localhost:3001/spotify/v1/login) - Endpoint request a new JWT from Spotify using the authentication workflow
- [http://localhost:3001/spotify/v1/search](http://localhost:3001/spotify/v1/search) - Endpoint for a general/global search to Spotify. Returns JSON of all results.

## Misc

Since I have two GitHub accounts, I needed to change the email for this repository to commit with the correct account.

To set the Git email for a single repository:

    git config user.email "VinczeChris-FS"

To confirm:

    git config user.email
    > VinczeChris-FS
