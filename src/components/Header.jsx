import React from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Importa a navegação

export default function Header() {
  const navigate = useNavigate(); // Hook para navegação entre páginas

  return (
    <header className="w-full bg-purple-600 p-4 flex justify-between items-center shadow-md">
      {/* Nome do sistema */}
      <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate("/")}>
        TrocaFácil
      </h1>

      {/* Barra de Pesquisa */}
      <div className="flex w-full max-w-md items-center bg-white rounded-full border border-gray-300 shadow-md px-4 py-2">
        <Search size={20} className="text-gray-500" />
        <input type="text" placeholder="Buscar produtos..." className="p-2 w-full outline-none" />
      </div>

      {/* Área de Conta */}
      <div className="flex items-center space-x-4">
        <button onClick={() => navigate("/signup")} className="text-white hover:underline">
          Criar Conta
        </button>
        <button onClick={() => navigate("/login")} className="text-white hover:underline">
          Entre
        </button>
        <button className="text-white hover:underline">
          Compras
        </button>
      </div>
    </header>
  );
}
