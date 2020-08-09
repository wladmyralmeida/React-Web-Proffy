import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';
// Fazer que esse input possa receber todas as propriedades 
// que um input do html receberia
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

// Rest operator para pegar todas as propriedades do TextArea e colocado
// dentro de rest;
const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}> {label} </label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default TextArea;