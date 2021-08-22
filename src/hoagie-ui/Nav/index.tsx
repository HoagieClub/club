import { majorScale, Pane } from "evergreen-ui"
import { ComponentType } from "react"
import Link from "gatsby-link"

interface NavProps {
    /** the name of the hoagie project */
    name:string;
    /** custom component in place of the logo */
    logoComponent?: ComponentType;
}

const Nav = ({name, logoComponent}:NavProps) => {
    return (
        <Pane id="intro" elevation={1}>
            <Pane width="100%" height={20} background="hoagie-purple"></Pane>
            <Pane display="flex" justifyContent="center" width="100%" height={majorScale(9)} background="white">
                <Pane 
                    display="flex" 
                    alignItems="center" 
                    width="100%" 
                    height="100%" 
                    maxWidth={1200} 
                    paddingX={20}
                    fontSize={25}
                >
                    <Link to="/">
                        <Pane cursor="pointer" fontFamily='Nunito'>
                            {logoComponent ? logoComponent : <Pane>hoagie<b>{name}</b></Pane>}
                        </Pane>
                    </Link>
                </Pane>
            </Pane>
        </Pane>
    )
}

export default Nav