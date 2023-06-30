import './MainTop.css';

function MainTop() {
  return (
    <div className="MainTop" id="sobre">
      <div>
        <h3>PROTEÇÃO EM TODOS  OS MOMENTOS</h3>
        <p>Proteção confiável para o seu veículo. 
            Conte com a nossa seguradora para manter o seu patrimônio seguro e tranquilo.</p>
        <button>Conheça as soluções</button>    
      </div>
      <div>
            <div className='imagemMotorista' area-label="Imagem de motorista"></div>
      </div>
    </div>
  );
}

export default MainTop;