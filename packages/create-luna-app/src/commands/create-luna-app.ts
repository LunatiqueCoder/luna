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

    const { selectedCLI } = await prompt.ask([
      {
        type: 'select',
        name: 'selectedCLI',
        message: 'Choose your CLI',
        choices: Object.values(CLIs),
      },
    ])

    if (selectedCLI === CLIs.tamagui) {
      const spinner = print.spin('Creating your app...')

      const installTemplate = await system.run('npx create-tamagui')
      spinner.succeed('Installed!')
      print.info(installTemplate)
    } else {
      const { appName } = await prompt.ask([
        {
          type: 'input',
          name: 'appName',
          message: 'What is the name of the app?',
        },
      ])

      const expoTemplate = `npx create-expo-app ${appName} --template @create-luna-app/expo@latest`
      const vanillaTemplate = `npx react-native init ${appName} --template @criszz77/luna@latest`
      const spinner = print.spin('Creating your app...')

      const installTemplate = await system.run(
        selectedCLI === CLIs.expo ? expoTemplate : vanillaTemplate
      )
      spinner.succeed('Installed!')
      print.info(installTemplate)
    }
  },
}

module.exports = command
