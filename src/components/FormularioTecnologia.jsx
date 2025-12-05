import { useState } from "react";

export default function FormularioTecnologia({ agregarTecnologia }) {
  const [tecnologia, setTecnologia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    if (tecnologia.trim() === "") return;

    agregarTecnologia(tecnologia);
    setTecnologia("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-tecnologia">
      <input
        type="text"
        placeholder="Nueva tecnología"
        value={tecnologia}
        onChange={(e) => setTecnologia(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
