import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import './index.scss';

export default function Menu() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className='Menu'>
            <div className='menu-form-container'>
                <h2>Cadastrar jogo</h2>
                <div className='menu-form'>
                    <input type='text' placeholder='Nome do jogo'/>
                    <input type='text' placeholder='Preço'/>
                    <input type='file' />
                    <button>Cadastrar</button>
                </div>
            </div>
            </div>

            
            <div className='products'>
        <h2>Escolha o jogo para editar ou excluir</h2>
        <div className='product-container'>
          <div className='product'>
            <img src='/assets/images/zelda.png' alt='Zelda Breath of the Wild'/>
            <p>Zelda Breath of the Wild<br/>R$ 299,99</p>
          </div>
          <div className='product'>
            <img src='/assets/images/godofwar.png' alt='God Of War - Ragnarok'/>
            <p>God Of War - Ragnarok<br/>R$ 249,99</p>
          </div>
          <div className='product'>
            <img src='/assets/images/forza.png' alt='Forza Horizon 5'/>
            <p>Forza Horizon 5<br/>R$ 219,99</p>
          </div>
        </div>
      </div>


            <div>
                <Footer/>
            </div>
        </div>
    )
}