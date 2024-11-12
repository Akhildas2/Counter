# Calculator App

This is a simple counter application built with Angular and NgRx. It allows users to increment, decrement, reset, and set a limit for the counter value.

## Features

- **Increment**: Increases the counter value.
- **Decrement**: Decreases the counter value (cannot go below zero).
- **Reset**: Resets the counter to zero.
- **Set Limit**: Allows setting a limit for the counter, preventing increments beyond the specified limit.
- **State Management**: Uses NgRx for state management to manage the counter value.

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.io/cli) (Use the command `npm install -g @angular/cli` to install globally)

### Installing

1. Clone the repository:

   ```bash
   https://github.com/Akhildas2/Counter.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Counter
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```bash
ng serve
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

```bash
 ng build --prod
```

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
