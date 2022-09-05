import {
    majorScale, Pane, Text, Position, Popover, Avatar, TabNavigation, Tab, useTheme,
} from 'evergreen-ui'
import { ComponentType } from 'react'
import ProfileCard from '../ProfileCard'

interface NavProps {
    /** name of app for hoagie{name} title */
    name: string;
    /** custom component in place of hoagie logo */
    LogoComponent?: ComponentType;
    /** custom component in place of header color strip */
    HeaderComponent?: ComponentType;
    /** list of tab objects for navbar, with title and href fields */
    tabs?: Array<any>;
    /** authenticated user data */
    user?: any;
    /** show 'beta' development disclaimer on hoagie app logo  */
    beta?: boolean;
}

/** Nav is a navbar meant for internal navigations throughout
 *  different Hoagie applications.
 */
function Nav({
    name, LogoComponent, HeaderComponent, tabs = [], user, beta = false,
}:NavProps) {
    const theme = useTheme();
    const uName = user?.isLoading ? 'Tammy Tiger' : (user?.user?.name ?? 'Tammy Tiger');

    return (
        <Pane elevation={1}>
            {HeaderComponent
                ? <HeaderComponent />
                : <Pane width="100%" height={20} background="blue500" />}
            <Pane
                display="flex"
                justifyContent="center"
                width="100%"
                height={majorScale(9)}
                background="white"
            >
                <Pane
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    height="100%"
                    maxWidth={1200}
                    paddingX={majorScale(5)}
                    fontSize={25}
                >
                        <Pane cursor="pointer" position="relative">
                            {LogoComponent
                                ? <LogoComponent />
                                : (
                                    <Pane>
                                        <Text
                                            is="h2"
                                            display="inline-block"
                                            className="hoagie logo"
                                            color="grey900"
                                        >
                                            hoagie
                                        </Text>
                                        <Text
                                            is="h2"
                                            display="inline-block"
                                            className="hoagie logo"
                                            color="blue500"
                                        >{name}
                                        </Text>
                                        {beta
                                        && (
                                            <Text
                                                className="hoagie beta"
                                                position="absolute"
                                                color="grey900"
                                            >
                                                (BETA)
                                            </Text>
                                        )}
                                    </Pane>
                                )}
                        </Pane>
                    <Pane display="flex" alignItems="center">
                    </Pane>
                </Pane>
            </Pane>
        </Pane>
    )
}

export default Nav
