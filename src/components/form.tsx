import React, { useState } from "react";
import { adicionarDados } from "./../fireStoreService";
import { FeedbackComponent, ErrorFeedbackComponent } from "./feedbackComponents";

interface FormProps {
  onSubmitSuccess: () => void;
}

const Form: React.FC<FormProps> = ({ onSubmitSuccess }) => {
  const [nome, setNome] = useState<string>("");
  const [squad, setSquad] = useState<number | "">("");
  const [description, setDescription] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const [improvements, setImprovements] = useState<string>("");
  const [feedback, setFeedback] = useState<{ tipo: 'sucesso' | 'erro'; mensagem: string } | null>(null);
  const [erros, setErros] = useState<string[]>([]);

  const numerosSquads = [
    { id: 1, nome: "Bot" },
    { id: 2, nome: "Gerência" },
    { id: 3, nome: "Push" },
    { id: 4, nome: "Aplicativo" },
    { id: 5, nome: "Outros" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    setErros([]);

    onSubmitSuccess();

    console.log("Formulário submetido com:", { nome, squad, description, review, improvements });

    try {
      await adicionarDados({ nome, squad: Number(squad), description, review, improvements });
      setNome('');
      setSquad('');
      setDescription('');
      setReview('');
      setImprovements('');

      setFeedback({ tipo: 'sucesso', mensagem: 'Formulário enviado com sucesso!' });
    } catch (error: any) {
      console.error('Erro ao adicionar o usuário:', error);

      if (error.message) {
        setFeedback({ tipo: 'erro', mensagem: error.message });
      } else {
        setErros(["Erro desconhecido ao tentar salvar o formulário. Tente novamente."]);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative max-w-md w-full max-h-screen overflow-auto p-8 rounded-2xl bg-white shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hide-scrollbar border-4 border-transparent animate-border-gradient"
           style={{ boxShadow: "0 0 20px 10px rgba(128, 0, 128, 0.4)" }}>
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 drop-shadow-md">
          Formulário de apresentação
        </h2>

        {/* Mensagens de Feedback */}
        {feedback && <FeedbackComponent tipo={feedback.tipo} mensagem={feedback.mensagem} />}
        {erros.length > 0 && <ErrorFeedbackComponent erros={erros} />}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
              Nome:
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg transition-all duration-300"
                placeholder="Digite seu nome"
              />
            </label>

            <label htmlFor="squad" className="block text-gray-700 font-medium mb-2">
              Squad:
              <div className="relative">
                <select
                  id="squad"
                  value={squad}
                  onChange={(e) => setSquad(Number(e.target.value))}
                  className="w-full px-4 py-3 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg transition-all duration-300 appearance-none bg-purple-100 text-purple-800 hover:bg-purple-200"
                  style={{ border: "none", boxShadow: "0 0 8px rgba(128, 0, 128, 0.3)" }}
                >
                  <option value="" disabled hidden className="text-gray-400">
                    Selecione uma squad
                  </option>
                  {numerosSquads.map(({ id, nome }) => (
                    <option key={id} value={id}>{nome}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </label>


            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Descrição:
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg transition-all duration-300"
                placeholder="Descreva o seu trabalho"
              />
            </label>

            <label htmlFor="review" className="block text-gray-700 font-medium mb-2">
              Avaliação:
              <p className="py-1 mb-1 text-purple-500 text-xs text-opacity-50">
                O que você acha sobre meu desempenho, pode ser no geral ou específico.
              </p>
              <textarea
                className="w-full h-32 p-4 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg resize-none break-words transition-all duration-300"
                placeholder="Digite seu texto aqui"
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </label>

            <label htmlFor="improvements" className="block text-gray-700 font-medium mb-2">
              Melhorias:
              <p className="py-1 mb-1 text-purple-500 text-xs text-opacity-50">
                O que pode ser melhorado no meu trabalho?
              </p>
              <textarea
                className="w-full h-32 p-4 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg resize-none break-words transition-all duration-300"
                placeholder="Digite seu texto aqui"
                id="improvements"
                value={improvements}
                onChange={(e) => setImprovements(e.target.value)}
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl hover:bg-purple-700 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
