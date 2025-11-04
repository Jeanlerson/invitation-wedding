"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones (shadcn/lucide-react)

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#000D33] shadow-[0_10px_30px_rgba(0,0,0,0.4)] px-10 py-5 mb-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <p className="font-great-vibes text-3xl text-[#5CADFF] max-sm:text-2xl">J + G</p>

        {/* Botão hambúrguer (visível apenas em telas pequenas) */}
        <button
          className="text-white sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <ul className="hidden sm:flex space-x-4 text-white font-poppins">
          <li>
            <a
              className="rounded-md hover:bg-[#5CADFF] transition-all duration-500 ease-in-out p-2"
              href="https://maps.app.goo.gl/BhDNEaK6rfaTuaod9"
            >
              LOCAL
            </a>
          </li>
          <li>
            <a
              className="rounded-md hover:bg-[#5CADFF] transition-all duration-500 ease-in-out p-2"
              href="https://wa.me/5585992081366?text=Ol%C3%A1%21%20Vim%20do%20site%20do%20convite%20de%20casamento%2C%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%21"
            >
              CONTATO
            </a>
          </li>
        </ul>
      </div>

      {/* Menu mobile (aparece ao clicar no ícone) */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 space-y-2 text-white font-poppins sm:hidden">
          <li>
            <a
              className="block rounded-md hover:bg-[#5CADFF] transition-all duration-500 ease-in-out p-2"
              href="https://maps.app.goo.gl/BhDNEaK6rfaTuaod9"
              onClick={() => setMenuOpen(false)}
            >
              LOCAL
            </a>
          </li>
          <li>
            <a
              className="block rounded-md hover:bg-[#5CADFF] transition-all duration-500 ease-in-out p-2"
              href="https://wa.me/5585992081366?text=Ol%C3%A1%21%20Vim%20do%20site%20do%20convite%20de%20casamento%2C%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%21"
              onClick={() => setMenuOpen(false)}
            >
              CONTATO
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}