import styled from 'styled-components';
import { darken } from 'polished';
import styleSettings from '../../style-settings';

const { colors, sizes, breakPoints } = styleSettings;

const BigButton = styled.button`
  background-color: ${colors.primary};
  border: none;
  border-bottom: .6rem solid ${darken(0.1, colors.primary)};
  color: white;
  font-weight: bold;
  font-size: ${sizes.large};
  margin-bottom: ${sizes.medium};
  padding: 2.4rem;
  width: 100%;
  
  &:disabled {
    opacity: .5;
  }
  
  @media (min-width: ${breakPoints.desktop}) {
    margin-bottom: ${sizes.extraLarge};
  }
`;

export default BigButton;
