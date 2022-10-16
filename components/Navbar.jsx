import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Bag } from '@styled-icons/bootstrap/Bag';
import { Cart } from './';

import { useStateContext } from '../context/StateContext'

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <Wrapper>
      <div className='logo'>
        <Link href='/'><p>exogear.</p></Link>
      </div>

      <div className='cart' onClick={() => setShowCart(true)}>
        <Bag className='icon' />
        <span><p>{totalQuantities}</p></span>
      </div>

      {showCart && <Cart />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
padding: 20px 40px;
display: flex;
justify-content: space-between;

.logo, .cart {
  z-index: 100;
}

.logo {
  color: black;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
}

.cart {
  position: relative;
  cursor: pointer;
  right: 20px;

  span {
    position: absolute;
    background: #f85050;
    width: 15px;
    height: 15px;
    text-align: center;
    border-radius: 50%;
    bottom: 13px;
    right: -7px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: .6rem;
    }
  }

  .icon {
    width: 18px;
    color: black;
  }
}
`

export default Navbar