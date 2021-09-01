# 🛸 `react-native-web-advanced-template`

> This project was configured for Android and Web only. There is no support for IOS yet. \
> [Please be sure your environment is set up correctly for React Native CLI.](https://reactnative.dev/docs/environment-setup)

## ⚠️ Work in progress!

## ⭐ Features:

- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Elements](https://reactnativeelements.com/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [react-app-rewired](https://www.npmjs.com/package/react-app-rewired)
- [Customize Create-React-App](https://github.com/arackaf/customize-cra)

## 🛠 Usage

`npx react-native init SomeApp --template https://github.com/Notorious112/react-native-web-advanced-template.git`

Use the above command to use this template. Prior to that, all the commands from below are available:

### `npm run web`

Runs the app in the web.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the web app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed for web!


### `npm run start`

Start Metro Bundler.


### `npm run android`

Launches the app for Android in debug mode.

## ⚠️ React Native CLI
This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`) for the below command to work. If you wish to not use npx, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

If you tried the above and still get the react-native-template-react- native-template-typescript: Not found error, please try adding the `--ignore-existing` flag to force npx to ignore any locally installed versions of the CLI and use the latest.
Further information can be found here: https://github.com/react-native-community/cli#about
