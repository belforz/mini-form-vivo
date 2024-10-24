import React from 'react';

interface FeedbackProps {
  tipo: 'sucesso' | 'erro';
  mensagem: string;
}

const FeedbackComponent: React.FC<FeedbackProps> = ({ tipo, mensagem }: FeedbackProps) => {
  const estiloFeedback =
    tipo === 'sucesso' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';

  return (
    <div className={`p-4 rounded-md ${estiloFeedback} my-4`}>
      <p>{mensagem}</p>
    </div>
  );
};

interface ErrorFeedbackProps {
    erros: string[];
}

const ErrorFeedbackComponent: React.FC<ErrorFeedbackProps> = ({ erros}: ErrorFeedbackProps) =>{
    if( erros.length === 0){
        return null
    }

    return (
        <div className="p-4 rounded-md bg-red-100 text-red-800 my-4">
      <h4 className="font-bold mb-2">Erro{erros.length > 1 ? 's' : ''}:</h4>
      <ul className="list-disc pl-6">
        {erros.map((erro, index) => (
          <li key={index}>{erro}</li>
        ))}
      </ul>
    </div>
    );
};

export {FeedbackComponent,ErrorFeedbackComponent};
