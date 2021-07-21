import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.inclues(buttonStyle) 
  ? buttonStyle 
  : STYLES[0];

  const checkButtonSize = SIZES.inclues(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/contact' className="btn-mobile">
            <button>
                {children}
            </button>

        </Link>
    )

};
