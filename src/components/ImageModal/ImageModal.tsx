import React from 'react';
import Modal from 'react-modal';
import { ImageModalProps } from './ImageModal.types';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ onClose, onOpen, photo }) => {
  return (
    <div>
          <Modal
              className={css.modal}
              isOpen={onOpen}
              onRequestClose={onClose}
            >
        <img className={css.image} src={photo}/>
          </Modal>
    </div>
  );
}
export default ImageModal;