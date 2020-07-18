import React from 'react';
import PropTypes from 'prop-types';

import Option from '../option/option';
import { ButtonLink } from '../../app.styles';
import { WidgetHeader, Title, Message } from './options.styles';

const Options = ({ options, handleDeleteOption, handleDeleteOptions }) => (
  <>
    <WidgetHeader>
      <Title>Your Options</Title>
      <ButtonLink type="button" onClick={handleDeleteOptions}>Remove All</ButtonLink>
    </WidgetHeader>
    {options.length === 0 && <Message>Please add an option to get started!</Message>}
    <div>
      {
        options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={handleDeleteOption}
          />
        ))
      }
    </div>
  </>
);

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
};

export default Options;
