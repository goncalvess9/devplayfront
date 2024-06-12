import './index.scss';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

export default function Contato() {
    return (
        <div>
            <div>
                <Header/>
            </div>

             <div className='Contato'>
            <div className='contact-form-container'>
                <h2>Contato</h2>
                <div className='contact-form'>
                    <input type='text' placeholder='Nome'/>
                    <input type='text' placeholder='Email'/>
                    <textarea placeholder='Mensagem'></textarea>
                    <button>Enviar</button>
                </div>
            </div>
            </div>


            <div>
                <Footer/>
            </div>
            </div>
    )
}