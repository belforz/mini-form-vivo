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

export async function adicionarDados(dados: Dados){
    !dados.nome || dados.nome.trim() === "" ? (() => {throw new Error("O campo nome não pode ser vazio.")})()
    : dados.nome.trim().length < 10 ?(()=> {throw new Error("O campo nome precisa de apelido maior que isso ")})()
    : !dados.squad || isNaN(dados.squad) || dados.squad <= 0 ? (()=>{throw new Error("O campo squad não pode estar vazio")})()
    :!dados.description || dados.description.trim() === "" ? (() => {throw new Error("O campo descrição não pode ser vazio.")})()
    :!dados.description || dados.description.trim() === "" ? (() => {throw new Error("O campo descrição não pode ser vazio e menor que 20 caracteres.")})()
    :!dados.review || dados.review.trim() === "" ? (() => {throw new Error("O campo avaliação não pode ser vazio")})()
    :!dados.review || dados.review.trim() === "" ? (() => {throw new Error("O campo avaliação não pode ser vazio e menor que 20 caracteres.")})()
    :!dados.improvements || dados.improvements.trim() === "" ? (() => {throw new Error("O campo melhorias não pode ser vazio.")})()
    :!dados.improvements || dados.improvements.trim() === "" ? (() => {throw new Error("O campo melhorias não pode ser vazio e menor que 20 caracteres.")})()
    : null;
    try {
        console.log("Tentando adicionar o documento com dados:", dados
        );
        const docRef = await addDoc(collection(db,'dados'),dados);
        console.log('Documento adicionado com sucesso', docRef.id);
        return docRef;


    } catch (error){
        console.error("Documento com problema na sua salvação", error);
        throw error;
    };
    
};

