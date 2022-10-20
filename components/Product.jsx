import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { urlFor } from '../lib/client'

//icons
import { Star } from '@styled-icons/bootstrap/Star'
import { StarFill } from '@styled-icons/bootstrap/StarFill'

const Product = ({product: {image, name, slug, price, description}}) => {
  return (
    <Link href={`/product/${slug.current}`}>
    <Wrapper>
      <div className='image-container'>
        <img src={urlFor(image && image[0])} alt='' />
      </div>
      
      <div className='product-info'>
        <h3 className='product-name'>{name}</h3>
        <p className='product-price'><span>€</span>{price}</p>
      </div>

      <div className="product-single-description">{description}</div>

      <div className='rating'>
        <StarFill className='icon' />
        <StarFill className='icon' />
        <StarFill className='icon' />
        <StarFill className='icon' />
        <Star className='icon' />
        <p className='rating-count'>(20)</p>
      </div>
    </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
cursor: pointer;
display: flex;
flex: 1;
min-width: 250px;
max-width: 300px;
flex-direction: column;
margin-bottom: 10px;

@media(max-width: 590px){
  max-width: 200px;
  min-width: 200px;
  width: 200px;
}

@media(max-width: 480px){
  max-width: 150px;
  min-width: 150px;
  width: 150px;
}

.rating {
  display: flex;
  align-items: center;

  .rating-count {
    margin-left: 5px;
    font-size: .6rem;
  }

  .icon {
    width: 12px;
  }

  .icon, .rating-count {
    color: var(--green);
  }
}

.product-info {
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    width: 70%;
    white-space: pre-wrap;
    @media(max-width: 550px){
      font-size: .8rem;
    }
  }

  p {
    font-size: .9rem;
    font-weight: 600;
    @media(max-width: 550px){
      font-size: .7rem;
    }
  }

  span {
    font-size: .8rem;
    position: relative;
    bottom: 3px;

    @media(max-width: 550px){
      font-size: .6rem;
    }
  }
}

.product-single-description {
  opacity: .7;
  font-size: .7rem;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;

  @media(max-width: 550px){
    height: 150px;
  }

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .3s ease-out;
}
}
`

export default Product