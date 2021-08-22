import { ThemeProvider, Pane, defaultTheme } from "evergreen-ui"
import Button from "./Button"

function Theme(props) {
    let defTheme:any = defaultTheme

    const hoagieUI = {
      ...defTheme,
      colors: {
        ...defTheme.colors,
        'hoagie-orange': '#DE7548',
        'hoagie-purple': '#57309B',
      },
      fontFamilies: {
        ui: 'Nunito',
      },
      components: {
        ...defTheme.components,
        Button,
        },
      }
  
    return (
      <ThemeProvider value={hoagieUI}>
          {props.children}
      </ThemeProvider>
    )
}

export default Theme