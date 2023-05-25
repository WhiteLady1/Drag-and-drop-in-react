import React from 'react';
import './message.scss';

interface MessageProps {
  message: string[];
  onClose: () => void;
};

export const Message: React.FC<MessageProps> = ({
  message,
  onClose,
}) => (
  <div className='message'>
    <div className='message__wrapper'>
      <h3 className='message__wrapper__title'>{message[0]}</h3>
      {message.length > 1 && (
        message.slice(1).map((item, index) => (
          <p key={index} className='message__wrapper__text'>{item}</p>
        ))
      )}
      <button className='message__wrapper__button' onClick={onClose}>Close</button>
    </div>
  </div>
);
