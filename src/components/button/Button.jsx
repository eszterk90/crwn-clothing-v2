import React from 'react'
import './button.styles.scss'

// default button

// inverted Button

// google sign-in

const BUTTON_TPYE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}


function Button({children, buttonType, ...otherProps}) {
  return (
    <button className={`button-container ${BUTTON_TPYE_CLASSES[buttonType]}`}{...otherProps}>{children}</button>
  )
}

export default Button 