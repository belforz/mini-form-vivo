import React from 'react';

interface FeedbackProps {
    tipo: 'sucesso' | 'erro';
    mensagem: string;
}

const FeedbackComponent:
React.FC <FeedbackProps> = ({
    tipo, mensagem
}) =>  {
   // continuar em casa
}