import { defaultTheme } from "evergreen-ui"
const defTheme:any = defaultTheme

const Button = {
    ...defTheme.components.Button,
    appearances: {
        default: {
          color: '#57309B',
          border: '2px #57309B solid',
          backgroundColor: '#ffffff',
          _hover: {
            backgroundColor: '#F2EDF8',
          }
        },
        primary: {
          color: 'white',
            backgroundColor: '#DE7548',
            _hover: {
              backgroundColor: '#EE703B',
            },
            _active: {
              backgroundColor: '#CE6C42',
            },
            _focus: {
              boxShadow: '0 0 0 2px #E7E4F9',
          },
        },
        purple: {
          color: 'white',
          backgroundColor: '#6459ab',
          _hover: {
            backgroundColor: '#595099',
          },
          _active: {
            backgroundColor: '#4b418a',
          },
          _focus: {
            boxShadow: '0 0 0 2px #E7E4F9',
          },
      },
    }
}


export default Button;