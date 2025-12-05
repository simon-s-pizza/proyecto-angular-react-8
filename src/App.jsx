import { useState } from "react";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import Proyectos from "./components/Proyectos";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

import { datosCV, tecnologiasIniciales } from "./data/cvData";

function App() {
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const agregarTecnologia = (nueva) => {
    setTecnologias([...tecnologias, nueva]);
  };

  return (
    <div className="contenedor-cv">
      <CabeceraCV datos={datosCV} />

      <Perfil datos={datosCV} />

      <Educacion datos={datosCV} />

      <Experiencia datos={datosCV} />

      <ToggleHabilidades />

      <StackTecnologias tecnologias={tecnologias} />

      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      <Proyectos datos={datosCV} />
    </div>
  );
}

export default App;
