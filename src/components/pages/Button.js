import React from 'react'
import './Button.css'

/* FFE6E6 = pastel light pink
   F2D1D1 = pastel darker pink
   DAEAF1 = pastel light blue
   C6DCE4 = pastel darker blue
*/

const BTN_STYLES = ['btn--default', 'btn--outline']

const BTN_SIZES = ['btn--medium', 'btn--big', 'btn--mobile']

const BTN_COLORS = ['default', 'darkpink', 'lightblue', 'darkblue']

export const Button = ({
  children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize, 
  buttonColor 
  }) => {
    const checkButtonStyle = BTN_STYLES.includes(buttonStyle) ? buttonStyle : BTN_STYLES[0]
    const checkButtonSize = BTN_SIZES.includes(buttonSize) ? buttonSize : BTN_SIZES[0]
    const checkButtonColor = BTN_COLORS.includes(buttonColor) ? buttonColor : BTN_COLORS[0]

    return (<button className={`btn ${checkButtonStyle} ${checkButtonSize} 
    ${checkButtonColor}`} onClick={onClick} type={type}> {children} </button>)
  }