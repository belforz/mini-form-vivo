import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

// Funcão para salvar as informações do formulario;

interface Dados {
    nome: string;
    squad: number;
    description: string;
    review: string;
    improvements: string;
}

export async function adicionarDados(dados: Dados) {
    // Validações dos campos
    if (!dados.nome || dados.nome.trim() === "") {
      throw new Error("O campo nome não pode ser vazio.");
    } else if (dados.nome.trim().length < 10) {
      throw new Error("O campo nome precisa ter mais de 10 caracteres.");
    }
  
    if (!dados.squad || isNaN(dados.squad) || dados.squad <= 0) {
      throw new Error("O campo squad não pode estar vazio e deve ser um número válido.");
    }
  
    if (!dados.description || dados.description.trim() === "") {
      throw new Error("O campo descrição não pode ser vazio.");
    } else if (dados.description.trim().length < 5) {
      throw new Error("O campo descrição deve ter pelo menos 5 caracteres.");
    }
  
    if (!dados.review || dados.review.trim() === "") {
      throw new Error("O campo avaliação não pode ser vazio.");
    } else if (dados.review.trim().length < 20) {
      throw new Error("O campo avaliação deve ter pelo menos 20 caracteres.");
    }
  
    if (!dados.improvements || dados.improvements.trim() === "") {
      throw new Error("O campo melhorias não pode ser vazio.");
    } else if (dados.improvements.trim().length < 20) {
      throw new Error("O campo melhorias deve ter pelo menos 20 caracteres.");
    }
  
    // Tentativa de adicionar o documento ao Firestore
    try {
      console.log("Tentando adicionar o documento com dados:", dados);
      const docRef = await addDoc(collection(db, 'dados'), dados);
      console.log('Documento adicionado com sucesso', docRef.id);
      return docRef;
  
    } catch (error) {
      console.error("Documento com problema na sua salvação", error);
      throw error; // Relança o erro para ser tratado pelo frontend
    }
  };
