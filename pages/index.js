import React from 'react'
import styled from 'styled-components'

import { Product, FooterBanner, HeroBanner, Options } from '../components';

import { client } from '../lib/client';

const index = ({bannerData, productsData}) => {
  return (
    <Wrapper>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

        <Category>
          <h3>Best Seller Products</h3>
          <p>Check out our best selling products</p> 
        </Category>

        <ProductsContainer>
          {productsData?.map((product) => <Product key={product._id} product={product} />)}
        </ProductsContainer>

        <Options />

        <Category>
          <h3>Browse newest listings</h3>
          <p>Check out our newly added products</p> 
        </Category>

        <ProductsContainer>
          {productsData?.map((product) => <Product key={product._id} product={product} />)}
        </ProductsContainer>

        <FooterBanner />
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
padding: 0 5%;
justify-content: center;
gap: 1rem;
flex-wrap: wrap;
margin-bottom: 40px;
`

const Category = styled.div`
margin: 40px 0;
padding: 0 5%;

h3, p {
  user-select: none;
}

h3 {
font-size: 1.6rem;
color: black;
}

p {
  opacity: .6;
  font-size: .8rem;
}
`

const Wrapper = styled.div``

export default index