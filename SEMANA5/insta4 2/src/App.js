import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import ShakiraPerfil from './img/shak_logo.jpg';
import ShakiraPost from './img/Shakira.jpeg';
import IvetePerfil from './img/vevete_logo.png';
import IvetePost from './img/vevete.jpg';
import JloPerfil from './img/jlo_logo.jpg';
import JloPost from './img/jlo.jpg';



class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Shakira'}
          fotoUsuario= {ShakiraPerfil}
          fotoPost={ShakiraPost}
        />
        <Post
          nomeUsuario={'Ivete'}
          fotoUsuario={IvetePerfil}
          fotoPost={IvetePost}
        />
        <Post
          nomeUsuario={'JLO'}
          fotoUsuario={JloPerfil}
          fotoPost={JloPost}
        />
      </div>
    );
  }
}

export default App;
