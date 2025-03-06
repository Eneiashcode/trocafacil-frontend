import React from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import { Search, Package, Handshake, ShoppingBag } from "lucide-react";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-lightgray flex flex-col items-center p-6">
      <Header />

      {/* Opções principais */}
      <div className="grid grid-cols-3 gap-4 mb-8 mt-6">
        <Card className="p-4 text-center cursor-pointer bg-primary text-white rounded-lg hover:bg-secondary transition">
          <Handshake size={30} className="mx-auto" />
          <p className="mt-2 text-sm">Trocar</p>
        </Card>
        <Card className="p-4 text-center cursor-pointer bg-primary text-white rounded-lg hover:bg-secondary transition">
          <Package size={30} className="mx-auto" />
          <p className="mt-2 text-sm">Doar</p>
        </Card>
        <Card className="p-4 text-center cursor-pointer bg-primary text-white rounded-lg hover:bg-secondary transition">
          <ShoppingBag size={30} className="mx-auto" />
          <p className="mt-2 text-sm">Vender</p>
        </Card>
      </div>

      {/* Lista de Produtos */}
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Produtos Recentes</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <img src="https://via.placeholder.com/150" alt="Produto" className="w-full h-32 object-cover rounded-lg" />
            <CardContent>
              <p className="text-sm font-bold mt-2">Bicicleta Aro 29</p>
              <p className="text-xs text-gray-600">Troca por notebook</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <img src="https://via.placeholder.com/150" alt="Produto" className="w-full h-32 object-cover rounded-lg" />
            <CardContent>
              <p className="text-sm font-bold mt-2">PlayStation 4</p>
              <p className="text-xs text-gray-600">À venda por R$ 1200</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
