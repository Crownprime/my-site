import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'
import theme from '../src/styles/theme'

import 'tailwindcss/tailwind.css'
import '../src/styles/global.css'

addDecorator(withThemes(ThemeProvider, [theme]))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}