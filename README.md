# ember-redux-starter

In this project we build an Ember-Redux app: simple todos. 

## Redux
[Redux](http://redux.js.org/) is a predictable state container for JS apps. 

There are a few core concepts in redux:

* State: the app's state is described as a plain object.
* Action: a plain object describing what happened to the state. Actions must have `type` field
* Reducer: a function that takes state and an action as arguments, and returns the next state.

Keep in mind the following rules

* The state of the whole app is stored in a single object.
* Do not modify the state in writing reducers. Make changes with pure functions.

## Prerequisites

You will need the following things properly installed on your computer.

* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* Redux Chrome DevTools

## Installation

* `git clone <repository-url>` this repository
* `cd ember-redux-starter`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Building

* `ember build` (development)
* `ember build --environment production` (production)

