import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import './index.scss';
import { Link } from "react-router-dom";

export default function Login() {
    return (
       <div>
        <div>
            <Header/>
        </div>

        <div className='Login'>
            <div className='login-form-container'>
                <h2>Login</h2>
                <div className='login-form'>
                    <input type='text' placeholder='Usuário'/>
                    <input type='text' placeholder='Senha'/>
                    <Link to='/Menu'>
                    <button>Entrar</button>
                    </Link>
                </div>
            </div>
            </div>


        <div>
            <Footer/>
        </div>
       </div>
    )
}