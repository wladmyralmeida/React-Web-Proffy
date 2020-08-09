import React, { InputHTMLAttributes } from 'react';

import './styles.css';
// Fazer que esse input possa receber todas as propriedades 
// que um input do html receberia
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

// Rest operator para pegar todas as propriedades do input e colocado
// dentro de rest;
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}> {label} </label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;