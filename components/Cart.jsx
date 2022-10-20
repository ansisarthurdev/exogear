import React, { useRef } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import toast from 'react-hot-toast'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'

//icons
import { KeyboardArrowLeft as ArrowLeft } from '@styled-icons/material/KeyboardArrowLeft'
import { BagRemove } from '@styled-icons/ionicons-outline/BagRemove'
import { Plus } from '@styled-icons/bootstrap/Plus'
import { Minus } from '@styled-icons/boxicons-regular/Minus'

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
  
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(cartItems),
    });
  
    if(response.statusCode === 500) return;
  
    const data = await response.json();
  
    toast.loading('Redirecting...');
  
    stripe.redirectToCheckout( {sessionId: data.id } )
  }

  return (
    <Wrapper ref={cartRef}>
      <div className='cart-container'>
        <button 
          type='button'
          className='cart-heading-btn'
          onClick={() => setShowCart(false)}
        >
          <ArrowLeft className='icon' />
          <span className='heading-txt'>Your Cart</span>
          <span className='cart-quantity'>({totalQuantities} items)</span>
        </button>

        {cartItems?.length < 1 && (
          <EmptyCart>
            <h3>Your shopping bag is empty</h3>
          </EmptyCart>
        )}

        <div className='product-container'>
          {cartItems?.length >= 1 && cartItems.map(item => (
            <Product key={item._id}>
              <div className='product-left'>
                {item?.image && <img src={urlFor(item?.image[0])} className='cart-product' />}
              </div>

              <div className='product-right'>
                <div className='product-info'>
                  <h4>{item?.name}</h4>
                  <p>€{item?.price}</p>
                </div>

                <div className='product-quantity'>

                  <div className='quantity'>
                    <div className='quantity-box'>
                        <Minus className='icon' onClick={() => toggleCartItemQuantity(item._id, 'dec')} />
                    </div>

                    <div className='quantity-box count'>{item.quantity}</div>

                    <div className='quantity-box'>
                        <Plus className='icon' onClick={() => toggleCartItemQuantity(item._id, 'inc')} />
                    </div>
                  </div>

                  <BagRemove className='icon-bag' onClick={() => onRemove(item)}/>
                </div>
              </div>
            </Product>
          ))}
        </div>

        {cartItems?.length >= 1 && (
            <SubTotal>
              <div className='cart-subtotal'>
                <p>Cart Subtotal:</p>
                <p>€{totalPrice.toFixed(2)}</p>
              </div>

              <button
                type='button'
                className='stripe-btn'
                onClick={handleCheckout}
              >Pay With Stripe</button>
            </SubTotal>
        )}
      </div>
    </Wrapper>
  )
}

const SubTotal = styled.div`
position: absolute;
bottom: 0px;
background: white;
width: 100%;
padding: 10px 20px 20px;

.cart-subtotal {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  
  p {
    font-size: .9rem;
  }
}

.stripe-btn {
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  padding: 8px 15px;
  text-transform: uppercase;
  font-size: .7rem;
  border-radius: 20px;
  border: none;
  background-color:  #03A9F4;
  color: white;
  font-weight: bold;
  transition: .3s ease-out;
  cursor: pointer;

  :hover {
    opacity: .8;
    transform: scale(1.1);
    left: 10%;
  }
}
`

const Product = styled.div`
display: flex;
gap: .5rem;
margin-bottom: 10px;

.product-right {
  width: 80%;

  .product-info {
    display: flex;
    justify-content: space-between;
    font-size: .9rem;
  }

  .product-quantity {
    display: flex;
    justify-content: space-between;
    align-items: end;

    .icon-bag {
      width: 20px;
      color: #f85050;
      cursor: pointer;
      transition: .3s ease-out;

      :hover {
        transform: scale(1.1);
      }
    }

    .quantity {
      display: flex;
      margin-top: 10px;

        p {
            margin-right: 20px; 
        }

        .quantity-box {
            padding: 3px;
            transition: .3s ease-out;
            cursor: pointer;
            font-size: .9rem;
            display: flex;
            align-items: center;
            background: #d9d9d973;

            .icon {
                width: 18px;
            }

            :hover {
                background: black;
                color: white;
            }
        }

        .count {
            padding: 3px 10px;
            user-select: none;
        }
    }
  }

}

.product-left {
  width: 20%;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
`

const EmptyCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .7rem;
`

const Wrapper = styled.div`
position: fixed;
width: 100%;
height: 100%;
left: 0;
top: 0;
background: #00000048;
z-index: 100;


.cart-container {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 400px;
  background: white;
  z-index: 110;
  padding-top: 10px;

  @media(max-width: 430px){
    width: 100%;
  }

  .product-container {
    padding: 0 15px;
  }

  .cart-heading-btn {
    display: flex;
    background: none;
    border: none;
    align-items: center;
    gap: 10px;
    outline: none;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;

    .heading-txt {
      white-space: none;
    }

    .icon {
      width: 28px;
    }

    .cart-quantity {
      color: var(--green);
    }
  }
}
`

export default Cart