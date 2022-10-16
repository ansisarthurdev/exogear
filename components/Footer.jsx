import React from 'react'
import styled from 'styled-components'

//icons
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'

const Footer = () => {
  return (
    <Wrapper>
      <p>2022 exogear. All rights reserved</p>
      <div className='icons'>
        <InstagramAlt className='icon' />
        <Facebook className='icon' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
text-align: center;
margin: 80px 0 20px;
font-weight: bold;

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