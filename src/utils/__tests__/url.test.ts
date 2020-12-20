import { isExternalLink } from '../url'

test('isExternalLink', () => {
  expect(isExternalLink('/user')).toBeFalsy()
  expect(isExternalLink('user')).toBeFalsy()
  expect(isExternalLink('https://github.com/Jacky-Summer')).toBeTruthy()
  expect(isExternalLink('http://github.com/Jacky-Summer')).toBeTruthy()
  expect(isExternalLink('//github.com/Jacky-Summer')).toBeTruthy()
})
