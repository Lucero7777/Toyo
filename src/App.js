// src/App.js
import React from 'react';
import './App.css'; // Asegúrate de que este CSS esté enlazado
import memeImage from './assets/imagen.jpg'; // Importa tu imagen

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola mundo</h1>
        {/* Aquí va la imagen del meme */}
        <img
          src={memeImage}
          className="project-image" // Usaremos esta clase para los estilos
          alt="Meme del proyecto Ybana"
        />

      </header>
    </div>
  );
}

export default App;
