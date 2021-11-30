<p align="center">
    <img 
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g6rptn8cgu8h0uvawrxo.jpeg" 
        alt="Logo" width="100%"
        style="max-width:800px;width:100%"
    >
</p>

# 🌒 `Luna`
### `🌒 Luna` is a `React Native` boilerplate with minimal configuration so your app can run on `Android`, `IOS` and `Web` concurrently.

## ⭐ Features
> ### Please visit the [`🌒 Luna Wiki`](https://github.com/plaut-ro/luna/wiki) to see why and how we decided to implement all those features.
> 🚀 For an advanced start, you can head to [react-native-firebase-authentification-example](https://github.com/invertase/react-native-firebase-authentication-example) which is built on top of Luna template

- [React Native Web](https://necolas.github.io/react-native-web/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [TypeScript](https://www.typescriptlang.org/)
- Other

## 🎛 Setup
> ⚠️ Please be sure your environment is set up correctly for React Native CLI. \
> 🔗 https://reactnative.dev/docs/environment-setup 

> We're using Github packages, so you'll need the following:
> 
> `npm config set registry=http://registry.npmjs.org/` \
 `npm config set @plaut-ro:registry=https://npm.pkg.github.com/`
> 
## 🛸 Usage

<pre>npx react-native init <b>MyAppName</b> --template @plaut-ro/luna</pre>

Use the above command to start a new React Native app using this template. After that, all the commands from below are available:

### `npm run web`

Runs the app in the web.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run start`

Start Metro Bundler.

### `npm run android`

Launches the app for Android in debug mode.

### `npm run ios`

Launches the app for IOS in debug mode.

## 🐛 Debugging
- ### React Native CLI
> This template only works with the new CLI. Please make sure that: 
> - [your environment is set up correctly for React Native CLI.](https://reactnative.dev/docs/environment-setup)
> - you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`) for the below command to work. If you wish to not use npx, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

> If you tried the above and still get the @plaut-ro/luna: Not found error, please try adding the `--ignore-existing` flag to force npx to ignore any locally installed versions of the CLI and use the latest.
Further information can be found here: https://github.com/react-native-community/cli#about 

## 📃 License

> 📃 This project is released under the [MIT License](LICENSE). \
> 💻 By contributing, you agree that your contributions will be licensed under its MIT License.
