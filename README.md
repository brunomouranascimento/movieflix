# Movieflix

Movieflix is a web application that uses https://swapi.co/ to retrive Star Wars movies data. 

## Features

- Angular 8 (components, routes, modules, services, guards, models);
- RxJS;
- Angular Material;
- Bootstrap 4;
- SASS;
- Firebase hosting: https://movieflixstarwars.firebaseapp.com/

### Running the application

To run the application uou need to install Node.js on your machine check this guide [here](https://nodejs.org/en/).
First git clone the repo, then go to directory and run `npm install` to install dev and prod dependencies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```sh
$ cd movieflix
$ npm install
$ ng serve
```

### Unit test

To execute unit tests, go to directory that you clonned early and run `ng test` to start Karma and the tests will execeute automatically.

```sh
$ cd movieflix
$ ng test
```

### Kwnown Issues

- [SWAPI](https://swapi.co/) returns each movie data individually, but all the characters, starships, planets, species and vehicles must be retrieved individually, with no movie-correlation. E.G: "The phantom menace" has 34 characters, and to show his names must be necessary 34 calls to the API, and it could be very "laggy". For future versions I could include a lazy load module to retrive complete data for each movie;
