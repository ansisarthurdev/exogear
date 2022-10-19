import React from 'react'
import styled from 'styled-components'

const FooterBanner = () => {

  const banner = [{
    heading: 'Frequently Asked Questions',
    info: 'Updates on safe shopping in our store.',
    img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  }, {
    heading: 'Online Payment Process',
    info: 'Updates on online payment process from Stripe.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  }, {
    heading: 'Home Delivery Options',
    info: 'Updates on delivery options in our store.',
    img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
  },]

  return (
    <Wrapper>
      {banner?.map(card => {
        const { heading, info, img } = card;

        return (
          <Card key={heading}>
            <div className='card-info'>
              <h3>{heading}</h3>
              <p>{info}</p>
            </div>
            <img src={img} alt='' />
          </Card>
        )
      })}
    </Wrapper>
  )
}

const Card = styled.div`
min-width: 310px;
max-width: 340px;
flex: 1;

img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.card-info {
  padding: 20px;
  background: #F6F6F6;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  p {
    margin: 10px 0;
    font-size: .6rem;
  }

  h3 {
    font-weight: 600;
  }
}
`

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
gap: 1.5rem;
padding: 0 5%;
`

export default FooterBanner