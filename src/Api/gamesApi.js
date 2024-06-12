// Importe as dependências necessárias
import axios from 'axios';
import { API_ADDRESS } from './constants';

// Função para salvar um jogo na API
export async function salvarJogo(jogo) {
    try {
        const response = await axios.post(`${API_ADDRESS}/games`, jogo);
        return response.data;
    } catch (error) {
        console.error('Erro ao salvar jogo:', error);
        throw error; // Lança o erro para ser tratado por quem chamar a função
    }
}

// Função para listar todos os jogos da API
export async function listarJogos() {
    try {
        const response = await axios.get(`${API_ADDRESS}/games`);
        return response.data;
    } catch (error) {
        console.error('Erro ao listar jogos:', error);
        throw error; // Lança o erro para ser tratado por quem chamar a função
    }
}

// Função para buscar um jogo por ID na API
export async function buscarJogoPorId(id) {
    try {
        const response = await axios.get(`${API_ADDRESS}/games/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar jogo por ID:', error);
        throw error; // Lança o erro para ser tratado por quem chamar a função
    }
}

// Função para deletar um jogo da API
export async function deletarJogo(id) {
    try {
        await axios.delete(`${API_ADDRESS}/games/${id}`);
    } catch (error) {
        console.error('Erro ao deletar jogo:', error);
        throw error; // Lança o erro para ser tratado por quem chamar a função
    }
}

// Função para atualizar um jogo na API
export async function atualizarJogo(id, jogo) {
    try {
        await axios.put(`${API_ADDRESS}/games/${id}`, jogo);
    } catch (error) {
        console.error('Erro ao atualizar jogo:', error);
        throw error; // Lança o erro para ser tratado por quem chamar a função
    }
}
