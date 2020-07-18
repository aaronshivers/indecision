import styled from 'styled-components';
import styleSettings from '../../style-settings';

const { colors, sizes, breakPoints } = styleSettings;

const Wrapper = styled.div`
  background-color: ${colors.offBlack};
  color: white;
  margin-bottom: ${sizes.medium};
  padding: ${sizes.medium} 0;
  
  @media (min-width: ${breakPoints.desktop}) {
    margin-bottom: ${sizes.extraLarge};
  }
`;

const Title = styled.h1`
  font-size: ${sizes.large};
  margin: 0;
`;

const SubTitle = styled.h2`
  color: ${colors.offWhite};
  font-size: ${sizes.medium};
  font-weight: 500;
  margin: 0;
`;

export { Wrapper, Title, SubTitle };
