import axios from 'axios';
import { API_ADDRESS } from './constants';


export async function buscarUsuarioPorId(id) {
    try {
        const response = await axios.get(`${API_ADDRESS}/usuarios/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuário por ID:', error);
        throw error; 
    }
}

export async function deletarUsuario(id) {
    try {
        await axios.delete(`${API_ADDRESS}/usuarios/${id}`);
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        throw error; 
    }
}


export async function atualizarUsuario(id, usuario) {
    try {
        await axios.put(`${API_ADDRESS}/usuarios/${id}`, usuario);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        throw error; 
    }
}
