import { withNextRouter } from 'storybook-addon-next-router'

import 'src/i18n'
import './storybook.css'
import 'antd/dist/antd.css'

export const decorators = [withNextRouter()]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
