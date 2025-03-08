import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Carrega o usuário do localStorage ao carregar a página
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="w-full bg-purple-600 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate("/")}>
        TrocaFácil
      </h1>

      <div className="flex w-full max-w-md items-center bg-white rounded-full border border-gray-300 shadow-md px-4 py-2">
        <Search size={20} className="text-gray-500" />
        <input type="text" placeholder="Buscar produtos..." className="p-2 w-full outline-none" />
      </div>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-white">{user.nome}</span>
            <button onClick={handleLogout} className="text-white hover:underline">
              Sair
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/signup")} className="text-white hover:underline">
              Criar Conta
            </button>
            <button onClick={() => navigate("/login")} className="text-white hover:underline">
              Entre
            </button>
          </>
        )}
      </div>
    </header>
  );
}
