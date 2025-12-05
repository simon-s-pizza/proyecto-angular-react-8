export default function CabeceraCV({ datos }) {
  return (
    <header>
      <h1>{datos.nombre}</h1>
      <p>{datos.descripcion}</p>
    </header>
  );
}
