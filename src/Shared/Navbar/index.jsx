import React from "react";

import * as Styled from "./style";
import { routes } from "../../Routes";

const Navbar = () => {
  return (
    <Styled.NavbarContainer>
      {routes.map((route, index) => {
        return (
          <Styled.NavLink key={index} to={route.path}>
            {route.name}
          </Styled.NavLink>
        );
      })}
    </Styled.NavbarContainer>
  );
};

export default Navbar;
