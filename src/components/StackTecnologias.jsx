export default function StackTecnologias({ tecnologias }) {
  return (
    <div className="stack">
      <h2>Stack Tecnológico</h2>
      <ul>
        {tecnologias.map((tec, index) => (
          <li key={index}>{tec}</li>
        ))}
      </ul>
    </div>
  );
}
