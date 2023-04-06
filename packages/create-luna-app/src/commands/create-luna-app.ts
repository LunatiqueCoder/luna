import { GluegunCommand, prompt } from 'gluegun'

const command: GluegunCommand = {
  name: 'create-luna-app',
  run: async (toolbox) => {
    const { system, print } = toolbox

    const result = await prompt.ask([
      {
        type: 'input',
        name: 'exinput',
        message: 'What is the name of the app?',
      },
      {
        type: 'select',
        name: 'exselect',
        message: 'Choose your CLI',
        choices: ['Expo', 'React Native'],
      },
    ])

    const expoTemplate = `npx create-expo-app ${result.exinput} --template @create-luna-app/expo@latest`
    const vanillaTemplate = `npx react-native init ${result.exinput} --template @criszz77/luna@latest`
    const spinner = print.spin('Creating your app...')

    const installTemplate = await system.run(
      result.exselect === 'Expo' ? expoTemplate : vanillaTemplate
    )

    spinner.succeed('Installed!')
    print.info(installTemplate)
  },
}

module.exports = command
