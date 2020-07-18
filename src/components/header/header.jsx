import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, SubTitle, Title } from './header.styles';
import { Container } from '../../app.styles';

const Header = ({ subtitle, title }) => (
  <Wrapper>
    <Container>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </Container>
  </Wrapper>
);

Header.defaultProps = {
  title: 'Indecision',
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
