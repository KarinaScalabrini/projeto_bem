import './ArticlePage.css';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaRss, FaUserTie } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
function ArticlePage() {
  return (
    <div className="Article" id="servicos" role="region" aria-label="Artigos sobre serviços">
      <h2>Sua segurança é nossa prioridade</h2>
      <div>
        <article>
          <AiOutlineCheck className="icon"/>
          <h4 className="colorText">Garantia de Satisfação</h4>
          <p className="colorText"> Se o resultado não atender às suas expectativas, você poderá solicitar um reembolso.</p>
          <button type="button" aria-label="Saiba mais: Garantia de satisfação" title="Detalhes">Detalhes</button>
        </article>
        <article>
          <FaRss className="icon"/>
          <h4 className="colorText">Gerenciamento Online</h4>
          <p className="colorText"> Otimize seu tempo e evite dores de cabeça com uma plataforma de gerenciamento online.</p>
          <button type="button" aria-label="Saiba mais: Gerenciamento online" title="Detalhes">Detalhes</button>
        </article>
        <article>
          <FaUserTie className="icon"/>
          <h4 className="colorText">Serviços Personalizados</h4>
          <p className="colorText"> Contratação de serviços personalizados, para atender especificamente às suas necessidades</p>
          <button type="button" aria-label="Saiba mais: Serviços personalizados" title="Detalhes">Detalhes</button>
        </article>
        <article>
          <FaHeadset className="icon"/>
          <h4 className="colorText">Assistência 24 horas</h4>
          <p className="colorText">  Tranquilidade de contar com assistência 24 horas para emergências.</p>
          <button type="button" aria-label="Saiba mais: Assistência 24 horas" title="Detalhes">Detalhes</button>
        </article>
      </div>
    </div>
  );
}

export default ArticlePage;