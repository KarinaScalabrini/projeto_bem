import './HeaderPage.css';
import { AiFillPhone, AiFillProfile, AiFillHome } from "react-icons/ai";
import React from 'react';
function Header() {

    const navegar = (destino) => {
        const secaoDestino = document.getElementById(destino);
        console.log(destino)
        if (secaoDestino) {
          secaoDestino.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
  return (
    <div className="header">
        <div className='headerLogo'></div>
        <ul className="menu1">
            <li onClick={() => navegar("sobre")}>
                Sobre nós
            </li>
            <li onClick={() => navegar("servicos")}>
                Serviços
            </li>
            <li onClick={() => navegar("contato")}>
                Contato
            </li>
        </ul>
        <ul className="menu2">
            <li onClick={() => navegar("sobre")}><AiFillHome className='iconeHeader'/></li>
            <li onClick={() => navegar("contato")}><AiFillPhone className='iconeHeader'/></li>
            <li onClick={() => navegar("servicos")}><AiFillProfile className='iconeHeader' /></li>
        </ul>
    </div>
  );
}

export default Header;