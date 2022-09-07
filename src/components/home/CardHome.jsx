import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import './CardHome.css'


const CardHome = ({produc, setCounter}) => {

    const isLogged = localStorage.getItem('token')
 
const navigate = useNavigate()

const handleClick=()=>{
    navigate(`/product/${produc.id}`)
}
///agrega producto al cart
const handleAddCart= e =>{
    e.stopPropagation() 
    if(isLogged){
    const url= `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
    const obj={
        id: produc.id,
        quantity:1
    }
    axios.post(url,obj, getConfig())
.then(res=>{
    console.log(res.data)
    setCounter(e => e + 1)
})
    .catch(err => console.log(err))
}else {
    
    if (confirm('Para agregar productos debe loguearse') == true) {
        navigate(`/login/`)
      } 
      
}
}

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
            <button onClick={handleAddCart} className='card_home_btn'> <i className='bx bx-cart-add'></i></button>
        </div>
    </article>
  )
}

export default CardHome