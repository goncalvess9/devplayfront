import React, {useEffect, useState} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { listarJogos } from "../../Api/gamesApi";

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetchProdutos(); // Busca os produtos quando o componente é montado
        const intervalId = setInterval(fetchProdutos, 60000); // Atualiza os produtos a cada 60 segundos
        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }, []);

    const fetchProdutos = async () => {
        const listaProdutos = await listarJogos();
        setProdutos(listaProdutos);
    };
    return (
        <div>
            <div>
                <Header/>
            </div>

            <div className='products'>
                <h2>Produtos</h2>
                <div className='product-container'>
                    {produtos.map(produto => (
                        <div className='product' key={produto.id}>
                            <img src={produto.img} alt={produto.nome} />
                            <p>{produto.nome}<br />R$ {produto.preco}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div>
                <Footer/>
            </div>
        </div>
    )
}