import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CardHome.css'


const CardHome = ({produc}) => {

const navigate = useNavigate()

const handleClick=()=>{
    navigate(`/product/${produc.id}`)
}
//  console.log(produc)

  return (

      <article  onClick={handleClick} className='card__home'>
        <header className='card__home__header'>
            <img src={produc.productImgs[0]} alt="" />
        </header>
        <div className="card_home_body">
            <h3 className='card_home_name'>{produc.title}</h3>
            <section className='card_home_price'>
                <h4 className='card_home_price_label'>Price</h4>
                 <span className='card_home_price_value'>$ {produc.price}</span>
            </section>
            <button className='card_home_btn'> <i className='bx bx-cart-add'></i></button>
        </div>
    </article>
  )
}

export default CardHome