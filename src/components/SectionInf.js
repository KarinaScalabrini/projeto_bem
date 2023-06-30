import './SectionPage.css';
import { BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import React from 'react';

function Section() {
  return (
    <div id="contato" className="SectionInf" >
      <div className='imagemFundo' area-label="Apontamento de anúncio"></div>
      <div>
        <div className="containerInfo">
            <div className='logoSection' area-label="Imagem logo"></div>
            <h4>Aqui, você encontra o equilíbrio perfeito entre segurança e tranquilidade, proporcionando a máxima proteção e confiança que você merece. Nossa empresa é dedicada para que você se sinta seguro(a).</h4>
            <h2>0000 0000</h2>
            <p>Rua Rio de Janeiro, nº 1279 - Lourdes</p>
            <p>Belo  Horizonte/MG 30160-042</p>  
            <p>seguros@bemprotege.com</p>
        </div>
      </div>
      <footer>
        <ul>
          <li>BP Seguradora - 2023</li>
          <li><BsInstagram className='iconInf'/> </li>
          <li><BsLinkedin className='iconInf'/></li>
          <li><BsYoutube className='iconInf3'/></li>
        </ul>
      </footer>
        
    </div>
  );
}

export default Section;