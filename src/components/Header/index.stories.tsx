import React from 'react'
import Header from '.'
import mockMenuItems from './__fixtures__/menuItem.json'

jest.mock('./NavMenu', () => 'NavMenu')

export default {
  title: 'Example/Header',
  component: Header,
}

const Template = () => <Header menuItems={mockMenuItems} />

export const Default = Template.bind({})
