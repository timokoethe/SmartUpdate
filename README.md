# SmartUpdate Guide
[![License: MIT](https://img.shields.io/badge/license-MIT-mint)](https://opensource.org/license/mit)
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)](https://www.npmjs.com/)
[![NPM Version](https://img.shields.io/badge/npm-v10.8.3-mint)](https://www.npmjs.com/)
[![Electron](https://img.shields.io/badge/electronjs-mint)](https://www.electronjs.org/) <br>
[![macOS](https://img.shields.io/badge/macOS-black?logo=apple&logoColor=F0F0F0)](https://www.apple.com/de/macos/macos-sequoia/)
[![Windows](https://custom-icon-badges.demolab.com/badge/Windows-0078D6?logo=windows11&logoColor=white)](#)

SmartUpdate is an interactive public display application designed to educate users on how to update their smartphone and enable automatic update function based on their operating system (Android or iOS). This guide aims to help users keep their devices secure and running the latest software version by walking them through a step-by-step tutorial.

## Features
- **Cross-Platform Compatibility**: Designed to work on macOS, Windows and Linux
- **Interactive Tutorials**: Users are provided with a dynamic step-by-step guide to their smartphone's operating system. Each step is broken into simple and easy-to-follow instructions.
- **Platform-Specific Instructions**: Depending on whether the user selects Android or iOS, the app tailors the guide to reflect the specific nuances of each platform's update settings and process.
- **Navigation Controls**: Users can move forward and backward through the tutorial steps allowing them to revisit any part of the application.
- **Offline Mode**: The application functions offline and does not need any internet connection.
- **Localization**: Available in German and English allowing users to choose their preferred language on the first screen. 

## Project Setup
First ensure that you have the following installed:
-  [Node.js](https://nodejs.org/en/download/prebuilt-installer/current)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (comes bundled with Node.js)

After cloning the reository, install the required dependencies using ```npm```.
### Install
```bash
$ npm install
```

### Start
```bash
$ npm run start
```

### Build
```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
