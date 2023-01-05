# Project and Portfolio III: Web Development - Online

Term: 2301 (January 2023)

Instructor: Justin Workman

## Project Overview

This month you will be building out a music search app. You will integrate your project with Spotify's REST Web API.

## Prerequisites

- NodeJS >= v16.16.0
- NPM >= v8.11.0
- Brew >= v3.6.14 (if MacOS)
- MySQL Server >= v8.0.29
- Chrome/Firefox/Safari/Edge >= Latest 2 major versions

## Getting Started

In order to setup the project we will need to setup our `.env` file. You can do this by making a copy of our `.env.dist` and naming it to `.env` using the following command.

    cp .env.dist .env && vim .env

Place all of your environment variables inside the vim window, then save. After you have done that you will need to install all of your `node_modules` using the following command. Make sure you have yarn installed globally as well.

    npm install -g yarn
    yarn

After yarn has finished installing all of your `node_modules` you can now run the project. You will need to open two different bash sessions. One for the frontend app and one for the backend Express application.

**To Run Nuxt.js (frontend)**

    cd nuxt
    yarn dev

**To Run Express (backend)**

    yarn watch

## Links
