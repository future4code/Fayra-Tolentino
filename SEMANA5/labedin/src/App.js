import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-ULQ5ZAWDP-e3345353b359-192" 
          nome="Fayra Miranda" 
          descricao="Olá, sou a Fay! Acredito na tecnologia e na educação como elemento catalisador para o desenvolvimento sustentável. A intersecção dessas temáticas, juntamente com a criatividade são o meu ponto de encontro. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />  
      <CardPequeno
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />    
      </div>

      <div className="page-section-container">

        <h2>Experiências profissionais</h2>

        
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Mastertech - 2019" 
          descricao="Instrutora auxiliar da Acadêmia de Progamação em parceria com o Facebook" 
        />
        
        <CardGrande 
          imagem="https://seeklogo.net/wp-content/uploads/2013/04/prefeitura-de-sao-paulo-vector-logo-400x400.png" 
          nome="Prefeitura de São Paulo -2017" 
          descricao="Estagiária responsável pela atualização do banco de dados técnicos de São Paulo." 
        />
      </div>

      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
