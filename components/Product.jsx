import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Product = ({product: {image, name, slug, price}}) => {
  return (
    <Link href={`/product/${slug.current}`}>
    <Wrapper>
      <div className='image-container'>
        <img src={urlFor(image && image[0])} alt='' />
      </div>
      
      <h3 className='product-name'>{name}</h3>
      <p className='product-price'>€{price}</p>
    </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
max-width: 220px;
cursor: pointer;

h3 {
  font-size: 1rem;
}

p {
  font-size: .9rem;
}

:hover {
  .image-container {
    img {
      transform: scale(1.1);
    }
  }
}

.image-container {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .3s ease-out;
}
}
`

export default Product