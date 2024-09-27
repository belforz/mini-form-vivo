import React, { useState } from "react";

export default function Form() {
  const [nome, SetNome] = useState("");
  const [squad, SetSquad] = useState("");
  const [description, SetDescription] = useState("");
  const [review, SetReview] = useState("");
  const [improvements, SetImprovement] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Nome: ",
      nome,
      "Squad: ",
      squad,
      "description: ",
      description,
      "review: ",
      review,
      "improvements: ",
      improvements
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2x1 font-bold mb-6 text-center">
        {" "}
        Formulário de apresentação
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-gray-700 font-medium mb-2"
          >
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => SetNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus ring-blue-400"
              placeholder="Digite seu nome"
            ></input>
          </label>

          <label
            htmlFor="squad"
            className="block text-gray-700 font-medium mb-2"
          >
            <select
              id="squad"
              value={squad}
              onChange={(e) => SetSquad(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              
            >
              <option value="" disabled hidden className="text-gray-400">
                Selecione uma squad
              </option>
              <option value="Bot">Bot</option>
              <option value="gerencia">Gerência</option>
              <option value="Push">Push</option>
              <option value="SDK">Aplicativo</option>
              <option value="outro_estagiario">Outros</option>
            </select>
          </label>

          <label
            htmlFor="nome"
            className="block text-gray-700 font-medium mb-2"
          >
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => SetNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus ring-blue-400"
              placeholder="Digite seu nome"
            ></input>
          </label>

          <label
            htmlFor="nome"
            className="block text-gray-700 font-medium mb-2"
          >
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => SetNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus ring-blue-400"
              placeholder="Digite seu nome"
            ></input>
          </label>

          <label
            htmlFor="nome"
            className="block text-gray-700 font-medium mb-2"
          >
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => SetNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus ring-blue-400"
              placeholder="Digite seu nome"
            ></input>
          </label>
          <label
            htmlFor="nome"
            className="block text-gray-700 font-medium mb-2"
          >
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => SetNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus ring-blue-400"
              placeholder="Digite seu nome"
            ></input>
          </label>
        </div>
      </form>
    </div>
  );
}
