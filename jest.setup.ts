import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

jest.mock('./src/components/Header/NavMenu', () => 'NavMenu')

Enzyme.configure({ adapter: new Adapter() })
