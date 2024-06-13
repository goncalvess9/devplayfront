import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { salvarJogo, listarJogos, deletarJogo, atualizarJogo } from "../../Api/gamesApi";
import './index.scss';

export default function Menu() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [img, setImg] = useState('');
    const [games, setGames] = useState([]);
    const [editId, setEditId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [gameToDelete, setGameToDelete] = useState(null);

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

        await salvarJogo(formData);
        fetchGames();
    };

    const handleEdit = async (game) => {
        setEditId(game.id);
        setNome(game.nome);
        setPreco(game.preco);
        setImg(game.img);
    };

    const handleDelete = async (id) => {
        await deletarJogo(id);
        fetchGames();
        setShowDeleteModal(false);
    };

    const confirmDelete = (game) => {
        setShowDeleteModal(true);
        setGameToDelete(game);
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
                            placeholder='Imagem (URL)' 
                            value={img} 
                            onChange={(e) => setImg(e.target.value)} 
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
                            <img src={game.img} alt={game.nome} />
                            <p>{game.nome}<br />R$ {game.preco}</p>
                            <button onClick={() => handleEdit(game)}>Editar</button>
                            <button onClick={() => confirmDelete(game)}>Excluir</button>
                        </div>
                    ))}
                </div>
            </div>

            {showDeleteModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Deseja realmente excluir o jogo {gameToDelete.nome}?</p>
                        <button onClick={() => handleDelete(gameToDelete.id)}>Sim</button>
                        <button onClick={() => setShowDeleteModal(false)}>Não</button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
