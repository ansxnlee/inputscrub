import styled from '@emotion/styled';
import { COLORS } from '../utils/constants';

/**
 * Top level wrapper for a page with the navbar
 */
export const ViewContainer = styled.div`
  background-color: ${COLORS.bg};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.text};
`;

/**
 * Body container wrapper for a page that has the navbar
 */
export const BodyContainer = styled.div`
  background-color: ${COLORS.bg};
  min-height: calc(100vh - 3em);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${COLORS.text};
`;

/**
 * Top level wrapper for a page without the navbar
 */
export const FullContainer = styled.div`
  background-color: ${COLORS.bg};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${COLORS.text};
`;
