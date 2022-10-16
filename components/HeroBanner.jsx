import React from 'react'
import styled from 'styled-components'

import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  return (
    <Wrapper>
      <img src={urlFor(heroBanner.image)} alt='' />
      <ImgFilter />

      <BannerText>
        <h2>{heroBanner.largetext}</h2>
        <p>{heroBanner.smalltext}</p>
        <div className='button'>{heroBanner.buttontext}</div>
      </BannerText>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 0 auto;
position: relative;

img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
`

const BannerText = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
width: 90%;
margin: 0 auto;

.button {
  background: #0000007e;
  color: white;
  display: inline-block;
  padding: 10px 40px;
  margin: 20px 0 0;
  border-radius: 10px;
  transition: .3s ease-out;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  :hover {
    background: black;
  }
}

h2, p {
  color: white;
}

h2 {
  font-size: 2rem;
}

p {
  opacity: .8;
}
`

const ImgFilter = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 400px;
background: black;
opacity: .6;
`

export default HeroBanner