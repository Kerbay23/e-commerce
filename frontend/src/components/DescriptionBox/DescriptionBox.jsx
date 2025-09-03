import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
     </div> 
      <div className='descriptionbox-description'>
        <p>An e-commerce website is an online platform that
         enables the buying and selling of goods and services over the internet. 
        It allows sellers to showcase their products with descriptions, images, and prices,
       while buyers can browse, select items, place orders, and make payments securely.
       E-commerce websites often include features like shopping carts, search functionality, 
        customer accounts, and order tracking. Popular examples include Amazon, Jumia, and eBay.
         These platforms make shopping convenient, accessible 24/7, and allow businesses to reach a 
            wider audience beyond physical boundaries.</p>
            <p>
              An e-commerce website that typically display products or services with detailed description, images, prices.
              each product has its own details and information.
            </p>
      </div>
    </div>
  )
}
export default DescriptionBox
