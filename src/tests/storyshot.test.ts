import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'
import 'jest-styled-components'
import { addSerializer } from 'jest-specific-snapshot'
import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer'
import path from 'path'

addSerializer(styleSheetSerializer)

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

initStoryshots({
  configPath: path.resolve(__dirname, '../../.storybook'),
  storyKindRegex: /^((?!.*?SkipTest).)*$/,
  test: multiSnapshotWithOptions(),
})
