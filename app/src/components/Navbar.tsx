import styled from '@emotion/styled';
import { COLORS } from '../utils/constants';
import { RouteButton } from '../components/RouteButton';

/**
 * Navbar component mostly used to hold route buttons
 */
export const Navbar = () => {
  return (
    <NavbarContainer>
      <RouteButton text='inputscrub webapp' href='/' />
      <Stretcher />
    </NavbarContainer>
  )
}

export const NavbarContainer = styled.div`
  background-color: ${COLORS.navbg};
  height: 3em;
  width: 100%;
  padding: 0px 40px 0px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: ${COLORS.text}
`;

/** Components after the stretcher get stuck to the right end of the navbar */
const Stretcher = styled.div`
  flex-grow: 1;
`;