const textoCards = [
  {
    titulo: "HTML",
    paragrafo: "Apreder a estruturar os elementos da página com HTML",
  },
  {
    titulo: "CSS",
    paragrafo: "Aprender a estilizar os elementos da página com CSS",
  },
  {
    titulo: "JAVASCRIPT",
    paragrafo: "Aprender a linguagem utilizada pelo React, o JavaScript",
  },
];

function CardRequisitos({ titulo, paragrafo }) {
  return (
    <div className="box-card">
      <h3>{titulo}</h3>
      <p>{paragrafo}</p>
    </div>
  );
}

export function SectionRequisitos() {
  return (
    <section>
      <h2 className="titulo-requisitos">Requisitos</h2>
      <p>Veja abaixo os requisitos mínimos para aprender React Js: </p>
      {textoCards.map((card, index) => (
        <CardRequisitos
          key={index}
          titulo={card.titulo}
          paragrafo={card.paragrafo}
        />
      ))}
    </section>
  );
}
