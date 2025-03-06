import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cidade: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação antes de enviar
    if (!formData.nome || !formData.email || !formData.senha) {
      setError("⚠️ Preencha todos os campos obrigatórios!");
      return;
    }

    setLoading(true); // Desativa botão enquanto processa
    setError(""); // Limpa mensagens de erro anteriores

    try {
      const response = await fetch("https://trocafacil-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao cadastrar usuário");
      }

      alert("✅ Usuário cadastrado com sucesso!");

      // Limpa o formulário
      setFormData({ nome: "", email: "", senha: "", cidade: "" });
    } catch (error) {
      console.error("🚨 Erro ao conectar ao backend:", error);
      setError(error.message || "Erro ao conectar ao servidor.");
    } finally {
      setLoading(false); // Reativa o botão
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Criar Conta</h2>

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

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
