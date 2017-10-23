# Framium

An open source kiosk display for showing any web app and giving it access to file storage and physical inputs (buttons, motion, camera etc). Built with electron.

Framium can be run as a desktop app on Mac OS, Windows and Linux. We are also building support for:
- Raspberry Pi (To launch on startup and be used in a kiosk mode)
- iOS (Through React Native)
- Android (Through React Native)

## Examples

- Digital Photo Frame
- Key Metrics Tracker (like Geckoboard)
- Digital Signage
- Home Dashboard

## How it works

Framium can be pointed to any URL and will display its contents. When Framium first loads it will prompt you for a URL, when entered it will simply display it. There is also a menu item to change the URL if you need to.

The idea is that the URL being loaded is a web app, that uses the offline manifest cache and service workers to display a service on the Framium device that can be run online and offline. However the web service could be anything you want it to be.

## Running Framium
Freemium is not currently in production, so you need to run the dev environment to play with it.

Download this repo. Copy ~/.env-sample to ~/.env and change the webpack dev server details if you need to.

Install all dependencies with yarn:
```
yarn
```
Run electron and then the webpack dev server in different console windows
```
// Runs electron
yarn start

// Runs the webpack dev server
yarn webpack
```

## Development scripts˜
Here's a list of the npm scripts and what they do:

- `start`: Launches electron
- `build`: Packages electron for distribution
- `webpack`: Runs webpack dev server
- `testservice:run`: Run the test service
- `testservice:build`: Build the test service js
- `git`: Helper to run common git commands and integrates with Trello cards
- `test`: Runs eslint and jest tests
- `test:checklist`: Run the manual checklist, of best practices
- `test:watch`: Run jest in watch mode
- `test:jestupdate`: Update the jest snapshots
- `test:jest`: Run jest
- `test:lint`: Run eslint
- `precommit`: Git hook that runs before commiting
- `commitmsg`: Git hook that runs when commiting, contains the commit message
