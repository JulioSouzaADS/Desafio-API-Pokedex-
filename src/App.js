import React from "react";
import Story, { Pokedex } from "./conectApi/api";



function App() {
  return (
    <>
      <h1>Listar</h1>
        <Story/>
        <Pokedex/>
    </>
      
  );
}

export default App;
