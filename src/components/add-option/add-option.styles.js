import styled from 'styled-components';
import { darken } from 'polished';
import styleSettings from '../../style-settings';

const { colors, sizes, breakPoints } = styleSettings;

const AddOptionError = styled.p`
  color: ${colors.offWhite};
  font-style: italic;
  margin: ${sizes.medium} 0 0 0;
  padding: 0 ${sizes.medium};
`;

const AddOptionForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${sizes.medium};
  
  @media (min-width: 45rem) {
    flex-direction: row;
  }
`;

const AddOptionInput = styled.input`
  background-color: ${colors.darkBlue};
  border: none;
  color: ${colors.offWhite};
  border-bottom: .3rem solid ${darken(0.1, colors.darkBlue)};
  flex-grow: 1;
  margin: 0 0 ${sizes.small} 0;
  padding: ${sizes.small};
  
  @media (min-width: ${breakPoints.desktop}) {
    margin: 0 ${sizes.small} 0 0;
  }
`;

export {
  AddOptionError,
  AddOptionForm,
  AddOptionInput,
};
