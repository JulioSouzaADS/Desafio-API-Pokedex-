


import React from "react";
import './button.css'

const clickInLabel = (label) => {
        alert( ` A Label Deste Botáo é ${label}` )
        // console.log(props)
}

const Button = ({label}) => {
    
    return (
        <button className="btn"
        onClick={() => clickInLabel(label)}>
            {label}
        </button>
        
        )

}



Button.defaltProps = {
    label : "Clique Aqui"
}


export default Button