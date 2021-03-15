import React from 'react';
// import IndexCss from './index.css';

export default function App (){
    return (
        <div class="form-container">
          <form class="register-form">
            <input
              id="full-name"
              class="form-field"
              type="text"
              placeholder="Digite seu nome"
              name="fullname"
            />
            <input
              id="age"
              class="form-field"
              type="text"
              placeholder="Digite sua idade"
              name="firstName"
            />
            
            <input
              id="schoolarship1"
              class="form-field"
              type="text"
              placeholder="Digite sua escolaridade"
              name="schoolarship"
            />
            <input
              id="email"
              class="form-field"
              type="text"
              placeholder="Email"
              name="email"
            />
            <button class="form-field" type="submit">
              Próxima Etapa
            </button>
          </form>
        </div>
      );
    }









