import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { salvarJogo, listarJogos, deletarJogo, atualizarJogo } from "../../Api/gamesApi";
import './index.scss';

export default function Menu() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [img, setImg] = useState(null); 
    const [games, setGames] = useState([]);
    const [editId, setEditId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        const jogos = await listarJogos();
        setGames(jogos);
    };

    const handleFileChange = (e) => {
        setImg(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('img', img);

        if (editId) {
            await atualizarJogo(editId, formData);
            setEditId(null);
        } else {
            await salvarJogo(formData);
        }

        setNome('');
        setPreco('');
        setImg(null);
        fetchGames();
    };

    const handleDelete = async (id) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const confirmDelete = async () => {
        await deletarJogo(deleteId);
        setShowModal(false);
        setDeleteId(null);
        fetchGames();
    };

    const handleEdit = (game) => {
        setEditId(game.id);
        setNome(game.nome);
        setPreco(game.preco);
    };

    return (
        <div>
            <Header />
            <div className='Menu'>
                <div className='menu-form-container'>
                    <h2>{editId ? 'Editar Jogo' : 'Cadastrar Jogo'}</h2>
                    <form className='menu-form' onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            placeholder='Nome do jogo' 
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            required 
                        />
                        <input 
                            type='number' 
                            placeholder='Preço' 
                            value={preco} 
                            onChange={(e) => setPreco(e.target.value)} 
                            required 
                        />
                        <input 
                            type='file' 
                            onChange={handleFileChange} 
                            required 
                        />
                        <button type='submit'>{editId ? 'Salvar Alterações' : 'Cadastrar'}</button>
                    </form>
                </div>
            </div>

            <div className='products'>
                <h2>Escolha o jogo para editar ou excluir</h2>
                <div className='product-container'>
                    {games.map(game => (
                        <div className='product' key={game.id}>
                            <img src={`http://localhost:5000/uploads/${game.img}`} alt={game.nome} />
                            <p>{game.nome}<br />R$ {game.preco}</p>
                            <button onClick={() => handleEdit(game)}>Editar</button>
                            <button onClick={() => handleDelete(game.id)}>Excluir</button>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <h3>Tem certeza que deseja excluir?</h3>
                        <button onClick={confirmDelete}>Confirmar</button>
                        <button onClick={() => setShowModal(false)}>Cancelar</button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
