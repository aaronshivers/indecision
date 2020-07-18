import styled, { createGlobalStyle } from 'styled-components';
import styleSettings from '../../style-settings';

const { sizes } = styleSettings;

const ModalGlobalStyles = createGlobalStyle`
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
  
  .ReactModal__Overlay--after-open{
      opacity: 1;
  }
  
  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
`;

const ModalTitle = styled.h3`
  margin: 0 0 ${sizes.medium} 0;
`;

const ModalBody = styled.p`
  font-size: 2rem;
  margin: 0 0 ${sizes.large} 0;
  word-break: break-all;
`;

export {
  ModalGlobalStyles,
  ModalTitle,
  ModalBody,
};
