import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AddOptionError,
  AddOptionForm,
  AddOptionInput,
} from './add-option.styles';
import { Button } from '../../app.styles';

class AddOption extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const { handleAddOption } = this.props;
    const option = e.target.elements.option.value.trim();
    const error = handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    const { error } = this.state;
    return (
      <>
        {error && <AddOptionError>{error}</AddOptionError>}
        <AddOptionForm onSubmit={this.handleAddOption}>
          <AddOptionInput type="text" name="option" />
          <Button type="submit">Add Option</Button>
        </AddOptionForm>
      </>
    );
  }
}

AddOption.propTypes = {
  handleAddOption: PropTypes.func.isRequired,
};

export default AddOption;
