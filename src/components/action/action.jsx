import React from 'react';
import PropTypes from 'prop-types';
import BigButton from './action.styles';

const Action = ({ handlePick, hasOptions }) => (
  <div>
    <BigButton
      type="button"
      onClick={handlePick}
      disabled={!hasOptions}
    >
      What should I do?
    </BigButton>
  </div>
);

Action.propTypes = {
  handlePick: PropTypes.func.isRequired,
  hasOptions: PropTypes.bool.isRequired,
};

export default Action;
