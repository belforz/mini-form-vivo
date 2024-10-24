interface FirebaseError {
  code: string;
  message: string;
}

export const handleFirestoreError = (error: FirebaseError) => {
  switch (error.code) {
    case "permission-denied":
      return "Você não tem permissão para executar essa operação. Por favor, contate o administrador.";
    case "not-found":
      return "O documento solicitado não foi encontrado.";
    case "unavailable":
      return "O serviço está temporariamente indisponível. Tente novamente mais tarde.";
    case "deadline-exceeded":
      return "A operação levou muito tempo para ser concluída. Tente novamente.";
    default:
      return "Ocorreu um erro desconhecido. Por favor, tente novamente.";
  }
};
