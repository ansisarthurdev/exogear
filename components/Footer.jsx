import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

//icons
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'

const Footer = () => {
  return (
    <Wrapper>
      
      <div className='footer-left'>
        <h3>exogear.</h3>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>

        <h4>Accepted payments</h4>
        <PaymentsContainer>
          <img src='../images/stripe.png' alt='' />
          <img src='../images/visa.png' alt='' />
          <img src='../images/mastercard.png' alt='' />
        </PaymentsContainer>

        <h4 style={{marginTop: 20}}>Find us on socials</h4>
        <div className='icons'>
          <InstagramAlt className='icon' />
          <Facebook className='icon' />
        </div>
      </div>

      <div className="footer-right">
        <FooterCategory>
          <h4>Navigation</h4>
          <Link href='/'>Newest additions</Link>
          <Link href='/'>Delivery</Link>
          <Link href='/'>Frequently asked questions</Link>
          <Link href='/'>Contact</Link>
        </FooterCategory>
      </div>
    </Wrapper>
  )
}

const FooterCategory = styled.div`
display: flex;
flex-direction: column;
gap: 5px;

a {
  font-size: .8rem;
  font-weight: 500;
}

h4 {
  font-size: .8rem;
  margin-bottom: 10px;
}
`

const PaymentsContainer = styled.div`
display: flex;
gap: 10px;

img {
  width: 34px;
  height: 24px;
  object-fit: cover;
  border: 1px solid lightgray;
  border-radius: 5px;
}
`

const Wrapper = styled.div`
margin: 40px auto 0;
max-width: 1400px;
border-top: 2px solid lightgray;
padding: 40px 5% 5%;
display: flex;
gap: 20px;

.footer-left {
  max-width: 200px;

  h3 {
    margin-bottom: 20px;
  }

  h4 {
    margin-bottom: 10px;
    font-size: .8rem;
  }

  p {
    margin-bottom: 20px;
    font-size: .7rem;
  }
}

.icons {
  margin-top: 10px;

  .icon {
    width: 24px;
    cursor: pointer;
    transition: .3s ease-out;

    :hover {
      transform: scale(1.1);
    }
  }
}
`

export default Footer