import React from 'react'
import './Input.css';

function Input(props) {
    const {size='medium', ...rest} = props;
    return (
        <div>
            <input type="text" className={`input ${size}`} {...rest}/>
        </div>
    )
}

export default Input
