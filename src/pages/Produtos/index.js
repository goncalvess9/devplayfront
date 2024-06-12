import React, {useEffect, useState} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Produtos() {
    return (
        <div>
            <div>
                <Header/>
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
    )
}