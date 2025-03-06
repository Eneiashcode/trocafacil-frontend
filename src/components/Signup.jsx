import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cidade: "",
  });

  const [loading, setLoading] = useState(false);

  // Definir a URL do backend corretamente (usando variável de ambiente ou localhost)
  const API_URL = process.env.REACT_APP_BACKEND_URL || "https://trocafacil-backend.onrender.com/";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.senha) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Usuário cadastrado com sucesso!");
        setFormData({ nome: "", email: "", senha: "", cidade: "" });
      } else {
        alert(data.error || "Erro ao cadastrar usuário");
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
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Criar Conta</h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome *"
          value={formData.nome}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
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
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={formData.cidade}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className={`w-full p-2 rounded text-white ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-purple-700 hover:bg-purple-800"
          }`}
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Criar Conta"}
        </button>
      </form>
    </div>
  );
}
