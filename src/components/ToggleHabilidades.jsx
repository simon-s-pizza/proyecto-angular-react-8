import { useState } from "react";
import Habilidades from "./Habilidades";

export default function ToggleHabilidades() {
  const [mostrar, setMostrar] = useState(true);

  const handleToggle = () => {
    setMostrar(!mostrar);
  };

  return (
    <div className="contenedor-toggle">
      <button onClick={handleToggle}>
        {mostrar ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>

      {mostrar && <Habilidades />}
    </div>
  );
}
