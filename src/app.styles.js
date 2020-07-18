import styled, { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import styleSettings from './style-settings';

const { sizes, colors } = styleSettings;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: ${colors.darkBlue};
    font-family: Helvetica, Arial, sans-serif;
    font-size: ${sizes.medium};
  }
  
  button {
    cursor: pointer;
    
    &:disabled {
      cursor: default;
    }
  }
`;

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 ${sizes.medium}
`;

const ButtonLink = styled.button`
  background: none;
  border: none;
  color: ${colors.offWhite};
  font-weight: 500;
  padding: 0;
`;

const Button = styled.button`
  background-color: ${colors.primary};
  border: none;
  border-bottom: .6rem solid ${darken(0.1, colors.primary)};
  color: white;
  font-weight: 500;
  padding: ${sizes.small};
  }
`;

export {
  GlobalStyle as default,
  Container,
  Button,
  ButtonLink,
};
