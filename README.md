# DevVitality

A social networking for all developers on the world

## Version

```
v1.0.0
```

## Authors

* **Le Quang Vinh** - *Initial work* - [avitryhard](https://github.com/avitryhard)

## License

MIT

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [NodeJS](https://nodejs.org) - A Javascript runtime

<p align='center'>
  <img src='https://github.com/avitryhard/DevVitality/blob/readme/install-nodejs.gif' alt='Installing NodeJS'>
</p>

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```sh
git clone https://github.com/avitryhard/DevVitality.git
cd DevVitality
npm install
cd client
npm install
cd ..
npm run dev
```
Then open [http://localhost:3000/](http://localhost:3000/) to see your app

<p align='center'>
  <img src='https://github.com/avitryhard/DevVitality/blob/readme/install-app.gif' alt='Installing NodeJS'>
</p>

## Project Structure

```
DevVitality
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── server.js
├── config
│   ├── db.js
│   ├── default.json
│   └── production.json
├── middlewares
│   └──auth.js
├── models
│   ├── Post.js
│   ├── Profile.js
│   └── User.js
├── routes/api
│   ├── auth.js
│   ├── posts.js
│   ├── profile.js
│   └── user.js
└── client
    ├── node_modules
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   └── manifest.json
    └── src
        ├── App.css
        ├── App.js
        ├── store.js
        ├── index.js
        ├── actions
        ├── components
        ├── helpers
        ├── img
        ├── reducers
        └── utils
          └── setAuthToken.js
```

## Deployment

[DevVitality](https://devvitality.herokuapp.com)
