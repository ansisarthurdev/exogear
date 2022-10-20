import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Link from 'next/link'
import { useStateContext } from '../context/StateContext'

import { CartCheck as Cart } from '@styled-icons/bootstrap/CartCheck'

const Success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    }, [])

  return (
    <Wrapper>
        <div className='success-container'>
            <Cart className='icon' />
            <h4 className='heading'>Thank You For Your Order!</h4>
            <p className='description'>Check your email inbox for the receipt.</p>

            <p className='description-email'>If you have any questions, please email <a href='mailto:@info@exogear.com'>info@exogear.com</a></p>

            <Link href='/'>
                <button type='button'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding-top: 120px;

.success-container {
    background: #dfdfdf87;
    padding: 40px 20px;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    border-radius: 10px;

    @media(max-width: 700px){
        border-radius: 0;
    }

    .heading {
        font-size: 1.2rem;
        margin: 10px 0 0 0;
    }
    
    .description {
        font-size: .8rem;
    }

    .description-email {
        margin: 30px 0 10px 0;
        font-size: .8rem;

        a {
            color: var(--green);
            font-weight: 500;

            :hover {
                text-decoration: underline;
            }
        }
    }
    
    button {
        outline: none;
        border: none;
        background: var(--green);
        color: white;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: .8rem;
        font-weight: 600;
        transition: .3s ease-out;
        cursor: pointer;

        :hover {
            opacity: .8;
        }
    }

    .icon {
        width: 24px;
        min-width: 24px;
        color: var(--green);
    }
}
`

export default Success