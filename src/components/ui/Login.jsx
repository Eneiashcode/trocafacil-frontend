import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Importado corretamente

export default function Login() {
  const navigate = useNavigate(); // ✅ Adicionado aqui

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📨 Enviando login com:", formData);

    try {
      const response = await fetch("http://127.0.0.1:10000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("🔍 Resposta do servidor:", response);

      const data = await response.json();
      if (response.ok) {
        alert("✅ Login realizado com sucesso!");
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/"); // ✅ Agora o navigate está definido!
      } else {
        alert(data.error || "Erro ao fazer login");
      }
    } catch (error) {
      console.error("🚨 Erro ao conectar ao backend:", error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full p-2 rounded text-white bg-purple-700 hover:bg-purple-800"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
