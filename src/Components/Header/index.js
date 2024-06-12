import { Link } from "react-router-dom";
import './index.scss'; 

export default function Header() {
    return (
        <header>
        <div className='top-header'>
          <div className='logo'>
            <Link to='/'>
              <img src='/assets/images/DevPlay.png' alt='Logo-LandingPage' />
            </Link>
          </div>
          <Link to='/Login'>
          <button className="login-btn">Login</button>
          </Link>

        </div>
        <div className='bottom-header-container'>
          <nav className='bottom-header'>
            <ul>
              <Link to='/'>
              <li><a href="#">Home</a></li>
              </Link>
              <Link to='/Contato'>
              <li><a href="#">Contato</a></li>
              </Link>
              <Link to='/Produtos'>
              <li><a href="#">Produtos</a></li>
              </Link>
            </ul>
          </nav>
          </div>
      </header>
    )
}