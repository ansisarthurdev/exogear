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
        <button className='button'>{heroBanner.buttontext}</button>
      </BannerText>
      
    </Wrapper>
  )
}

const BannerText = styled.div`
position: absolute;
top: 55%;
transform: translateY(-50%);
left: 5%;
width: 60%;
margin: 0 auto;

@media (max-width: 600px){
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
}

.button {
  background: var(--green);
  color: white;
  display: inline-block;
  padding: 10px 40px;
  margin: 20px 0 0;
  border-radius: 30px;
  transition: .3s ease-out;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;

  :hover {
    background: #003121;
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
  margin: 10px 0;
}
`

const Wrapper = styled.div`
margin: 0 auto;
position: relative;
padding-top: 70px;

img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
`

const ImgFilter = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 470px;
background: black;
opacity: .6;
`

export default HeroBanner