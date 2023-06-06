import React from 'react';
import './modal-img.scss';

interface ModalImgProps {
  imgSrc: string;
  onClose: () => void;
};

export const ModalImg: React.FC<ModalImgProps> = ({
  imgSrc,
  onClose,
}) => (
  <div className='modal-img'>
    <div className='modal-img__content'>
      <img className='modal-img__content__img' src={imgSrc} alt='Original' />
      <span className='modal-img__content__button' onClick={onClose}>Close</span>
    </div>
  </div>
);
