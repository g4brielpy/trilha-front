"use client";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Coffe() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themeLight = "bg-white text-black";
  const themeDark = "bg-black text-white";

  return (
    <div className={`h-screen ${isDarkTheme ? themeDark : themeLight}`}>
      <header
        className={`border-b border-solid ${
          isDarkTheme ? themeDark : themeLight
        }`}
      >
        <div className="max-w-[800px] m-auto px-2 py-4 flex justify-between gap-4">
          <p className="text-lg font-bold">Coffe Shop</p>
          <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
            {isDarkTheme ? <BsSun /> : <BsMoon />}
          </button>
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
            className={`
                px-8 py-3 rounded-full 
                hover:opacity-90 transition-all shadow-md
                 ${!isDarkTheme ? themeDark : themeLight}
            `}
          >
            Nossas Lojas
          </button>
        </div>
      </main>
    </div>
  );
}
