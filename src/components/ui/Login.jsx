import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const [loading, setLoading] = useState(false);

  // URL do backend (ajustando para ambiente local ou produção)
  const API_URL = process.env.REACT_APP_BACKEND_URL || "https://trocafacil-backend.onrender.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Login realizado com sucesso!");
        // Aqui você pode redirecionar o usuário para a página principal
        window.location.href = "/"; // Ajuste para a rota correta
      } else {
        alert(data.error || "Erro ao fazer login.");
      }
    } catch (error) {
      console.error("🚨 Erro ao conectar ao backend:", error);
      alert("Erro ao conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="E-mail *"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha *"
          value={formData.senha}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className={`w-full p-2 rounded text-white ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-purple-700 hover:bg-purple-800"
          }`}
          disabled={loading}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
