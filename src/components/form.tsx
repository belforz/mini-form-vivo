import React, { useState } from "react";
import { themes } from "../form";

const Form: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [nome, setNome] = useState<string>("");
  const [squad, setSquad] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const [improvements, setImprovements] = useState<string>("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Nome: ",
      nome,
      "Squad: ",
      squad,
      "Descrição: ",
      description,
      "Avaliação: ",
      review,
      "Melhorias: ",
      improvements
    );
  };

  return (
    <div className=" max-w-md w-full max-h-screen overflow-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Formulário de apresentação
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-gray-700 font-medium mb-2"
          >
            Nome:
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Digite seu nome"
            />
          </label>

          <label
            htmlFor="squad"
            className="block text-gray-700 font-medium mb-2"
          >
            Squad:
            <select
              id="squad"
              value={squad}
              onChange={(e) => setSquad(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="" disabled hidden className="text-gray-400">
                Selecione uma squad
              </option>
              <option value="Bot">Bot</option>
              <option value="Gerência">Gerência</option>
              <option value="Push">Push</option>
              <option value="SDK">Aplicativo</option>
              <option value="Outros">Outros</option>
            </select>
          </label>

          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Descrição:
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Descreva o seu trabalho"
            />
          </label>

          <label
            htmlFor="review"
            className="block text-gray-700 font-medium mb-2"
          >
            Avaliação:
            <textarea
              className="w-full h-32 p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md resize-none -break-words"
              placeholder="Digite seu texto aqui"
              id="review"
              value={review}
              onChange={(e) =>setReview(e.target.value)}
            ></textarea>
            {/* <input
              type="text"
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-96 h-20 p-4 break-all border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Avaliação do projeto"
            /> */}
          </label>

          <label
            htmlFor="improvements"
            className="block text-gray-700 font-medium mb-2"
          >
            Melhorias:
            <textarea
              className="w-full h-32 p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md resize-none -break-words"
              placeholder="Digite seu texto aqui"
              id="improvements"
              value={improvements}
              onChange={(e) =>setImprovements(e.target.value)}
            >

            </textarea>
            {/* <input
              type="text"
              id="improvements"
              value={improvements}
              onChange={(e) => setImprovements(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Sugestões de melhorias"
            /> */}
          </label>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
