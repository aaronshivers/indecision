import React from 'react';
import AddOption from '../add-option/add-option';
import Action from '../action/action';
import Header from '../header/header';
import Options from '../options/options';
import OptionModal from '../option-modal/option-modal';
import { Container } from '../../app.styles';
import Widget from './indecision-app.styles';

class IndecisionApp extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);

    if (options) {
      this.setState(() => ({ options }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;
    if (prevState.options.length !== options.length) {
      const json = JSON.stringify(options);
      localStorage.setItem('options', json);
    }
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(
        (currentOption) => optionToRemove !== currentOption,
      ),
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handlePick = () => {
    const { options } = this.state;
    const randomNumber = Math.floor(Math.random() * options.length);
    const option = options[randomNumber];
    this.setState(() => ({ selectedOption: option }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };

  handleAddOption = (option) => {
    const { options } = this.state;
    if (!option) {
      return 'Enter valid value to add item';
    }

    if (options.indexOf(option) >= 0) {
      return 'This option already exists';
    }

    return this.setState(
      (prevState) => ({ options: prevState.options.concat(option) }),
    );
  };

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    const { options, selectedOption } = this.state;
    return (
      <>
        <Header subtitle={subtitle} />
        <Container>
          <Action
            hasOptions={options.length > 0}
            handlePick={this.handlePick}
          />
          <Widget>
            <Options
              options={options}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </Widget>
        </Container>
        <OptionModal
          selectedOption={selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </>
    );
  }
}

export default IndecisionApp;
