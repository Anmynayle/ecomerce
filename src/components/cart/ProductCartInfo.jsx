import React from 'react'

const ProductCartInfo = () => {
  return (
    <article className='cart_item'>
       <header card_item_header>
        <h4 className='card_category'>Samsung</h4>
        <h3 className='card_name'></h3>
        </header>
        <i className='cart_trash bx bx-trash'></i>
        <span className='cart_quantitu'>1</span>
        <footer className='cart_item_footer'>
            <span className='cart_total_label'>Total:</span>
            <p className='card_total_number'>850</p>
        </footer>
    </article>
  )
}

export default ProductCartInfo