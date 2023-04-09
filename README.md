<p align="center">
    <img 
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g6rptn8cgu8h0uvawrxo.jpeg" 
        alt="Logo" width="100%"
        style="max-width:800px;width:100%"
    >
</p>


[![reactnative][3]][4]
[![Expo][34]][35]
[![nextjs][5]][6]
[![platforms][7]][8]
[![GitHub top language][31]][32]
[![ci][1]][2]
[![GitHub][9]][10]
[![npm][13]][14]
<!-- [![Maintenance][11]][12] -->
<!-- [![GitHub issues][15]][16] -->
<!-- [![GitHub closed issues][17]][18] -->

# 🌒 `Luna`
### `🌒 Luna` is a `React Native` and `Next.js` boilerplate so your app can run on `Android`, `IOS` and `Web` concurrently.
[You can try the live example here.][19]

## ⭐ Features
> 📖 Please visit the [`🌒 Luna Wiki`][20] to see why and how we decided to implement all those features. \
> 🚀 For an advanced start, but currently without `Next.js`, you can head to [react-native-firebase-authentification-example][21] which is built on top of Luna template

- [React Native Web][22]
- [Next.js][6]
- [Solito][23]
- [Tamagui][29]
- [TypeScript][24]
- No monorepo (everything in one app)
- Other

## 🎛 Setup
> ⚠️ Please be sure your environment is set up correctly for React Native \
> 🔗 https://reactnative.dev/docs/environment-setup 

## 🛸 Usage


You can create a new project interactively by running:

```bash
yarn create luna-app
```

![image](https://user-images.githubusercontent.com/55203625/230792569-195fb22f-9163-4173-a1a9-716010c08f82.png)


After that, all the commands from below are available:

- ### 📱  **Native**

#### `yarn start`

Start Metro Bundler. After that, you can press `i` or `a` to run the app on iOS or Android simulator respectively.

- ### 💻   **Web**
#### `yarn web`

Runs the app in the web in development mode.\
Open [http://localhost:3000][25] to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn build`

Builds the web app for production with Next.js.

#### `yarn next-start`

Runs the web app in production mode with Next.js. \
Open [http://localhost:3000][25] to view it in the browser. \
**Note:** You have to run `yarn build` first!


## 🪲 Debugging
- ### React Native CLI
> This template only works with the new CLI. Please make sure that:
> - [your environment is set up correctly for React Native CLI.][26]
> - you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`) for the below command to work. If you wish to not use npx, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

> If you tried the above and still get the @criszz77/luna: Not found error, please try adding the `--ignore-existing` flag to [force npx to ignore][30] any locally installed versions of the CLI and use the latest.
Further information can be found here: https://github.com/react-native-community/cli#about

- ### React Native Web
> [React Dev Tools][27] supports inspecting and editing of React Native styles. It’s recommended that you rely more on React Dev Tools and live/hot-reloading rather than inspecting and editing the **DOM** directly.


## 📃 License

> 📃 This project is released under the [MIT License](LICENSE). \
> 💻 By contributing, you agree that your contributions will be licensed under its MIT License.

## 🏆 Sponsors

|                           |    
|---------------------------|
| [![jetbrains100][33]][28] | 

[1]: https://github.com/LunatiqueCoder/react-native-media-console/workflows/ci/badge.svg
[2]: https://github.com/LunatiqueCoder/luna/actions
[3]: https://img.shields.io/badge/-React%20Native%20CLI-282C34?style=flat-square&logo=react&logoColor=61DAFB
[4]: https://reactnative.dev/

[5]: https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white
<!-- Other Next.js badge with Vercel icon: https://img.shields.io/badge/-Next.js-282C34?style=flat-square&logo=vercel&logoColor=white&labelColor=black&color=black -->
[6]: https://nextjs.org/
[7]: https://img.shields.io/badge/platforms-Android%20%7C%20iOS%20%7C%20Web-brightgreen.svg?style=flat-square&colorB=191A17
[8]: https://necolas.github.io/react-native-web/
[9]: https://img.shields.io/github/license/LunatiqueCoder/luna
[10]: https://github.com/LunatiqueCoder/luna/blob/master/LICENSE
[11]: https://img.shields.io/maintenance/yes/2023
[12]: https://github.com/LunatiqueCoder/luna/graphs/contributors
[13]: https://img.shields.io/npm/v/create-luna-app
[14]: https://www.npmjs.com/package/create-luna-app
[15]: https://img.shields.io/github/issues/criszz77/luna
[16]: https://github.com/LunatiqueCoder/luna/issues
[17]: https://img.shields.io/github/issues-closed/LunatiqueCoder/luna
[18]: https://github.com/LunatiqueCoder/luna/issues?q=is%3Aissue+is%3Aclosed
[19]: https://luna-gamma.vercel.app/
[20]: https://github.com/LunatiqueCoder/luna/wiki/v2.0.0
[21]: https://github.com/invertase/react-native-firebase-authentication-example
[22]: https://necolas.github.io/react-native-web/
[23]: https://solito.dev/
[24]: https://www.typescriptlang.org/
[25]: http://localhost:3000
[26]: https://reactnative.dev/docs/environment-setup
[27]: https://beta.reactjs.org/learn/react-developer-tools
[28]: https://www.jetbrains.com/
[29]: https://tamagui.dev
[30]: https://github.com/npm/npx#description
[31]: https://img.shields.io/github/languages/top/LunatiqueCoder/luna
[32]: https://github.com/criszz77/luna/search?l=typescript
[33]: https://user-images.githubusercontent.com/55203625/213786907-b95dfb4b-08bf-4449-a055-72edf401da23.png
[34]: https://img.shields.io/badge/-Expo%20CLI-282C34?style=flat-square&logo=expo&logoColor=#D04A37
[35]: https://expo.dev/
