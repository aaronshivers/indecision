import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styleSettings from '../../style-settings';
import {
  ModalBody,
  ModalGlobalStyles,
  ModalTitle,
} from './option-modal.styles';
import { Button } from '../../app.styles';

const { colors, sizes } = styleSettings;

Modal.setAppElement('#app');

const customStyles = {
  overlay: {

  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: colors.lightBlue,
    color: 'white',
    maxWidth: '30rem',
    outline: 'none',
    padding: sizes.large,
    textAlign: 'center',
  },
};

const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
  <>
    <ModalGlobalStyles />
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={handleClearSelectedOption}
      style={customStyles}
      closeTimeoutMS={200}
    >
      <ModalTitle>Selected Option</ModalTitle>
      {selectedOption && <ModalBody>{selectedOption}</ModalBody>}
      <Button type="button" onClick={handleClearSelectedOption}>okay</Button>
    </Modal>
  </>
);

OptionModal.defaultProps = {
  selectedOption: undefined,
};

OptionModal.propTypes = {
  selectedOption: PropTypes.string,
  handleClearSelectedOption: PropTypes.func.isRequired,
};

export default OptionModal;
