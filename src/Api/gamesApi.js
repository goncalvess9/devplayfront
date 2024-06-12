import axios from 'axios';
import { API_ADRESS } from './constants';

export async function salvarJogo(jogo) {
    const response = await axios.post(`${API_ADRESS}/games`, jogo, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
}

export async function listarJogos() {
    const response = await axios.get(`${API_ADRESS}/games`);
    return response.data;
}

export async function deletarJogo(id) {
    const response = await axios.delete(`${API_ADRESS}/games/${id}`);
    return response.data;
}

export async function buscarJogoPorId(id) {
    const response = await axios.get(`${API_ADRESS}/games/${id}`);
    return response.data;
}

export async function atualizarJogo(id, jogo) {
    const response = await axios.put(`${API_ADRESS}/games/${id}`, jogo, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
}