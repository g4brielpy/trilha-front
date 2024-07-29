"use client";
import { useState } from "react";

export default function Home() {
  const [contador, setContador] = useState(0);
  const [tranca, setTranca] = useState(true);
  const [estilos, setEstilos] = useState(true);

  return (
    <>
      <h1 className="text-blue-950 text-4xl text-center font-bold my-12">
        Hooks no React/Next
      </h1>
      <div className="mb-16 px-8 py-2">
        <h2 className="mb-4">useState</h2>
        <p className="text-xl mb-2">Voce clicou {contador} no botão</p>
        <button
          className="py-2 px-6 rounded-lg bg-blue-950 text-white"
          onClick={() => setContador(contador + 1)}
        >
          Click Aqui!
        </button>
      </div>

      <div className="mb-16 px-8 py-2">
        <h2 className="mb-4">useState</h2>
        <p className="text-xl mb-2">Valores booleanos</p>
        <button
          className="py-2 px-6 rounded-lg bg-blue-950 text-white"
          onClick={() => setTranca(!tranca)}
        >
          {tranca ? "Fechado" : "Aberto"}
        </button>
      </div>

      <div className="mb-16 px-8 py-2">
        <h2 className="mb-4">useState</h2>
        <p className="text-xl mb-2">Alterar Valores</p>
        <button
          className={`py-2 px-6 rounded-lg  text-white ${
            estilos ? "bg-red-950" : "bg-blue-950"
          }`}
          onClick={() => setEstilos(!estilos)}
        >
          {estilos ? "Mudar para Blue" : "Mudar para Red"}
        </button>
      </div>
    </>
  );
}
