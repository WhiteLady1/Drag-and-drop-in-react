import React from 'react';
import './message.css';

interface MessageProps {
  message: string[];
  onClose: () => void;
};

export const Message: React.FC<MessageProps> = ({
  message,
  onClose
}) => (
  <div className='message'>
    <h3>{message[0]}</h3>
    {message.length > 1 && (
      message.slice(1).map((item, index) => (
        <p key={index}>{item}</p>
      ))
    )}
    <button onClick={onClose}>Close</button>
  </div>
);
