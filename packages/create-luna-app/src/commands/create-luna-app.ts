import { GluegunCommand, prompt } from 'gluegun'

const CLIs = {
  expo: 'Expo',
  reactNative: 'React Native',
  tamagui: 'Expo (Monorepo) - with create-tamagui',
}

const command: GluegunCommand = {
  name: 'create-luna-app',
  run: async (toolbox) => {
    const { system, print } = toolbox

    const { appName, selectedCLI } = await prompt.ask([
      {
        type: 'input',
        name: 'appName',
        message: 'What is the name of the app?',
      },
      {
        type: 'select',
        name: 'selectedCLI',
        message: 'Choose your CLI',
        choices: Object.values(CLIs),
      },
    ])

    const expoTemplate = `yarn create expo-app ${appName} --template @create-luna-app/expo@latest`
    const vanillaTemplate = `npx react-native init ${appName} --template @criszz77/luna@latest`
    const tamaguiTemplate = `yarn create tamagui ${appName}`

    const spinner = print.spin(
      `Creating your ${(() => {
        switch (selectedCLI) {
          case CLIs.tamagui:
            return 'Tamagui (@tamagui/create-tamagui)'
          default:
            return '🌘 Luna'
        }
      })()} app...`
    )

    const installTemplate = await system.run(
      (() => {
        switch (selectedCLI) {
          case CLIs.expo:
            return expoTemplate
          case CLIs.reactNative:
            return vanillaTemplate
          case CLIs.tamagui:
            return tamaguiTemplate
          default:
            return expoTemplate
        }
      })()
    )

    spinner.succeed('Installed!')
    print.info(installTemplate)

    // If we don't re-enable the terminal cursor before exiting
    // the program, the cursor will remain hidden
    process.stdout.write('\x1B[?25h')
    process.stdout.write('\n')
    process.exit(0)
  },
}

module.exports = command
