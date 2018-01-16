# fourth-app

Application that works on both web and mobile devices to view take home pay after income tax and national insurance for a list of internal staff members.

## Getting Started

The app is built using AngularJs v1.6.1 which makes use of the SailsJs api.

The frontend repo is located in the ```./assets/client``` folder. This predisposes a scenario in which the backend and frontend repo are individual. In such case, the developers are allowed to work freely without interfering with each other. In a perfect scenario the ```./assets/client``` will be populated with the help of *git submodules*.

### Installing and running the app

* Install backend NPM dependencies:

- Go to the base ( ```./``` ) folder and run:

  `npm install`

* Install frontend NPM dependencies:

- Go to the ```./assets/client``` folder and run:

  `npm install`

* Run locally by calling the following command from the base ( ```./``` ) folder:

  `sails lift`

* Go to ```localhost:1337``` to access the app

## Running Unit Tests

* Go to the  ```./assets/client```  folder and call the following command:

  `karma start`