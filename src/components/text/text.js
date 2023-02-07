import React from "react";
import './text.css'


const Text = ({children, color,clickInLabel}) => {

        return (
        <div className="text"
         style={{backgroundColor :color}} 
         onClick={() => clickInLabel}
          >
           {children}
        </div>
    )
}

Text.defaultProps = {

  color : 'Coral',
  label: 'aaa'
}

export default Text
