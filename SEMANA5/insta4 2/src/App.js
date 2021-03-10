import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import ShakiraPerfil from './img/shak_logo.jpg';
import ShakiraPost from './img/Shakira.jpeg';
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
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'JLO'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </div>
    );
  }
}

export default App;
