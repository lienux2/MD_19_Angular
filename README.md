# MD19Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

or

Run `ng serve --open` for a dev server to open in automatically.

The application should automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
Run `ng generate service service-name` to generate a new service.

## If help needed

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Get Started

1. step:

   - install all dependancies.

   ```bash
   npm i

   or

   npm install
   ```

2. step:

   - run json-server

   ```bash
   npx json-server db.json

   or

   npm run server
   ```

3. step:

   - open up new terminal

4. step:

   - start dev server

   ```bash
   ng serve

   or

   ng serve --open
   ```

5. step:
   - open [Project](http://localhost:4200/) in your browser.

## Project structure

    - db.json = root file
    - components = src => app => components
    - services = src => app => services
    - Dinos.ts = interface for Dinos
    - mock-dinos.ts = can be ignored.

## About this project

Simple CRUD app using Angular. You can see all dinosaurs, see one dinosaur, edit (WIP), delete and add.
