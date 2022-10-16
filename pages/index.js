import React from 'react'
import styled from 'styled-components'

import { Product, FooterBanner, HeroBanner, Options } from '../components';

import { client } from '../lib/client';

const index = ({bannerData, productsData}) => {
  return (
    <Wrapper>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        <Options />

        <Category>
          <h3>Best Seller Products</h3>
          <p>Choose variety of our products</p> 
        </Category>

        <ProductsContainer>
          {productsData?.map((product) => <Product key={product._id} product={product} />)}
        </ProductsContainer>
    </Wrapper>
  )
}

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const productsQuery = '*[_type == "product"]';
  const productsData = await client.fetch(productsQuery);

  return {
    props: {bannerData, productsData}
  }
}

const ProductsContainer = styled.div`
display: flex;
padding: 0 10px;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
margin-bottom: 40px;
`

const Category = styled.div`
text-align: center;
margin: 40px 0;

h3, p {
  user-select: none;
}

h3 {
font-size: 1.8rem;
color: black;
}

p {
  opacity: .6;
}
`

const Wrapper = styled.div``

export default index