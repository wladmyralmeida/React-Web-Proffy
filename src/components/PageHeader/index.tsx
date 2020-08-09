import React from 'react';

import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'

interface PageHeaderProps {
    title: string;
    description?: string;
}
// Fazendo o componente entender que ele tem propriedades a serem recebidas
// Através de interface, que define o formato de tipagens de um objeto. FC.
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Logo" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>

                {/* Só vai executar se tiver a descrição, ou seja, se a primeira instrução for verdadeira */}
                {props.description && <p> {props.description} </p>}
                {props.children}
            </div>
        </header>
    );
}
export default PageHeader;