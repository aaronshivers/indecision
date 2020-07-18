import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLink } from '../../app.styles';
import { Wrapper, Text } from './option.styles';

const Option = ({ optionText, handleDeleteOption, count }) => (
  <Wrapper>
    <Text>{[count, '. ', optionText]}</Text>
    <ButtonLink type="button" onClick={() => handleDeleteOption(optionText)}>remove</ButtonLink>
  </Wrapper>
);

Option.propTypes = {
  optionText: PropTypes.string.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Option;
