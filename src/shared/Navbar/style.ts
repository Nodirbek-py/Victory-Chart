import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  height: 70px;
  background-color: #e9e9e9;
  box-shadow: 0px 7px 35px 0px rgba(212, 212, 212, 0.81);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  color: #2e343b;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  margin: 0 25px;
`;
