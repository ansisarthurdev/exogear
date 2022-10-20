import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Bag } from '@styled-icons/bootstrap/Bag';
import { Slider } from 'react-burgers'
import { Cart } from './';

import { useStateContext } from '../context/StateContext'

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [active, setActive] = useState(false);

  const navLinks = [
    {name: `What's New`, link: '/news'},
    {name: `Delivery`, link: '/delivery'},
    {name: `FAQ`, link: '/faq'},
    {name: `Contact`, link: '/contact'},
  ]

  return (
    <Wrapper>
      <div className="navbar">
      <div className='logo'>
        <Link href='/'><p>exogear.</p></Link>

        <MenuDesktop>
          {navLinks.map(nav => (
            <Link key={nav.name} href={nav.link}>
            <div className='menu-item'>
              <p>{nav.name}</p>
              <span />
            </div>
            </Link>
          ))}
        </MenuDesktop>
      </div>

      <div className='right-side-container'>
        <div className='cart' onClick={() => setShowCart(true)}>
          <p>Cart</p>
          <Bag className='icon' />
          <span><p>{totalQuantities}</p></span>
        </div>

        <MenuMobile>
          <Slider width={24} lineHeight={2} lineSpacing={4} active={active} onClick={() => setActive(!active)} padding={0} />
        </MenuMobile>
      </div>

      {showCart && <Cart />}      
      
      </div>

      <MenuMobileContainer style={{transform: active && 'translateY(0)'}}>
        {navLinks.map(nav => (
          <Link key={nav.name} href={nav.link}>
          <div className='menu-item'>
            <p>{nav.name}</p>
            <span />
          </div>
          </Link>
        ))}
      </MenuMobileContainer>
    </Wrapper>
  )
}

const MenuMobileContainer = styled.div`
position: fixed;
top: 67px;
padding-top: 20px;
left: 0;
background: white;
width: 100%;
flex-direction: column;
padding-bottom: 30px;
transition: transform .3s ease-out;
transform: translateY(-150%);
z-index: 100;

a {
  width: 100%;
}

.menu-item {
  cursor: pointer;
  text-align: center;
  padding: 10px;
}

@media (max-width: 600px){
  display: flex;
}
`

const MenuMobile = styled.div`
display: none;

@media (max-width: 600px){
  display: block;
}
`

const MenuDesktop = styled.div`
display: flex;
gap: 15px;
align-items: center;

@media (max-width: 600px){
  display: none;
}

.menu-item {
  position: relative;

  p {
  font-weight: 500;
  font-size: .9rem;
  }

  span {
    width: 0%;
    height: 3px;
    background: var(--green);
    position: absolute;
    left: 0;
    transition: .3s ease-out;
  }

  :hover {
    span {
      width: 100%;
    }
  }
}
`

const Wrapper = styled.div`

.navbar {
z-index: 150;
width: 100%;
padding: 20px 40px;
display: flex;
justify-content: space-between;
position: fixed;
top: 0px;
background: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.right-side-container {
  display: flex;
  gap: 10px;
  align-items: center;
}

.logo, .cart {
  z-index: 100;
}

.logo {
  color: black;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 30px;  
}

.cart {
  position: relative;
  cursor: pointer;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: .8rem;
    font-weight: 500;
  }

  span {
    position: absolute;
    background: var(--green);
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
      color: white;
    }
  }

  .icon {
    width: 18px;
    color: black;
  }
}
`

export default Navbar