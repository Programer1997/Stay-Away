import React from 'react';
import './button.css'; // Assuming you have a separate CSS file

const Button = ({ 
  label, 
  onClick, 
  disabled, 
  outline,
  small,
  icon: Icon,
}) => {
  return ( 
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button-base 
        ${outline ? 'button-outline' : 'button-filled'}
        ${small ? 'button-small' : 'button-regular'}
      `}
    >
      {Icon && <Icon size={24} className="button-icon" />}
      {label}
    </button>
  );
}

export default Button;