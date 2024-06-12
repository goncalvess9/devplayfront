import './index.scss';
import { Link } from "react-router-dom";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

export default function LandingPage() {
  return (
    <div className='LandingPage'>
    <div>
      <Header/>
    </div>

      <div className='main-img-container'>
      <img className='main-img' src='/assets/images/jogandovideogame.png' alt='jogando videogame'/>
      </div>

      <div className='intro'>
        <div className='intro-texto'>
          <h1>Somos a DevPlay, um e-commerce especializado na vitrine de jogos de videogame das principais plataformas, como: Playstation, Nintendo e Xbox.</h1>
          <p>Nossa missão é oferecer aos gamers um catálogo de jogos com preço justo.</p>
          <p>Aqui você encontra as melhores promoções e o melhor atendimento!</p>
        </div>
        <div className='side-img-container'>
        <img className='side-img' src='/assets/images/DevPlay.png' alt='DevPlay logo'/>
        </div>
      </div>

      <div className='platforms'>
        <h2>Plataformas</h2>
        <div className='platform-container'>
          <div className='platform'>
            <img src='/assets/images/nintendo.png' alt='Nintendo'/>
            <p>Nintendo</p>
          </div>
          <div className='platform'>
            <img src='/assets/images/playstation.png' alt='Playstation'/>
            <p>Playstation</p>
          </div>
          <div className='platform'>
            <img src='/assets/images/xbox.png' alt='Xbox'/>
            <p>Xbox</p>
          </div>
        </div>
      </div>

      <div className='products'>
        <h2>Produtos</h2>
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
  );
}
