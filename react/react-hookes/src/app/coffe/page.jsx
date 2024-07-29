import React from "react";

export default function Coffe() {
  return (
    <>
      <header className="border-b border-solid">
        <div className="max-w-[800px] m-auto px-2 py-4 flex justify-between gap-4">
          <p className="text-lg font-bold">Coffe Shop</p>
          <p>Icon</p>
        </div>
      </header>
      <main className="mt-40">
        <div className="max-w-[800px] m-auto px-2 py-5 text-center space-y-8">
          <h1 className="text-3xl font-bold">A Melhor Cafeteria do Brasil</h1>
          <p className="italic">
            Venha conhecer a melhor cafeteria do Brasil! Localizada no coração
            de São Paulo, oferecemos cafés artesanais de alta qualidade e um
            ambiente acolhedor. Desfrute de nossas bebidas exclusivas e
            deliciosos acompanhamentos enquanto relaxa em um espaço único.
            Esperamos por você para uma experiência inesquecível!
          </p>
          <button
            className="
                px-8 py-3 bg-black text-white rounded-full 
                hover:opacity-90 transition-all shadow-md
            "
          >
            Nossas Lojas
          </button>
        </div>
      </main>
    </>
  );
}
