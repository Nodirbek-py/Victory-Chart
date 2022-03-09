import React from 'react';

import * as Styled from "./style"
import { routes } from "../../routes"

const Navbar: React.FC = () => {
    return (
        <Styled.NavbarContainer>
            {routes.map((route, index) => {
                return (
                    <Styled.NavLink key={index} to={route.path}>{route.name}</Styled.NavLink>
                )
            })}
        </Styled.NavbarContainer>
    )
}

export default Navbar;