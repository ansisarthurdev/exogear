import React, { useState } from 'react'
import styled from 'styled-components'

import { client, urlFor } from '../../lib/client'

//icons
import { Star } from '@styled-icons/bootstrap/Star'
import { StarFill } from '@styled-icons/bootstrap/StarFill'
import { Plus } from '@styled-icons/bootstrap/Plus'
import { Minus } from '@styled-icons/boxicons-regular/Minus'

//components
import { Product } from '../../components'

import { useStateContext } from '../../context/StateContext'

const ProductItem = ({products, product}) => {

    const { image, name, description, price} = product;
    const [index, setIndex] = useState(0);
    const { incQty, decQty, qty, onAdd } = useStateContext(); 

    return(
        <Wrapper>
            <div className='product-container'>
                <div className='product-preview'>
                    <img className='product-image' src={urlFor(image && image[index])} alt='' />

                    
                    <div className='product-images'>
                        {image?.map((item, i) => (
                            <img key={i} src={urlFor(item)} className={i === index && 'selected'} 
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>

                </div>

                <div className='product-description'>
                    <h1>{name}</h1>
                    <div className='rating'>
                        <StarFill className='icon' />
                        <StarFill className='icon' />
                        <StarFill className='icon' />
                        <StarFill className='icon' />
                        <Star className='icon' />
                        <p className='rating-count'>(20)</p>
                    </div>

                    <div className='details'>
                        <h3>Details</h3>
                        <p>{description}</p>
                    </div>

                    <h2 className='price' style={{color: 'var(--green)'}}>€{price}</h2>
                    <p className='shipping'><span style={{textDecoration: 'underline'}}>Shipping</span> is calculated at checkout.</p>

                    <div className='quantity'>
                        <p>Quantity:</p>

                        <div className='quantity-box'>
                            <Minus className='icon' onClick={decQty}/>
                        </div>

                        <div className='quantity-box count'>
                            {qty}
                        </div>

                        <div className='quantity-box'>
                            <Plus className='icon' onClick={incQty} />
                        </div>
                    </div>

                    <div className='buttons'>
                        <button className='add-to-cart button' onClick={() => onAdd(product, qty)}>Add to Cart</button>
                        <button className='buy-now button'>Buy Now</button>
                    </div>
                </div>
            </div>

            <Suggestions>
                <h3 className='heading'>You may also like</h3>

                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map(product => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </Suggestions>

        </Wrapper>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
  
  export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    return {
      props: { products, product }
    }
  }

const Suggestions = styled.div`

.heading {
    text-align: center;
    margin: 100px 0 40px;
    user-select: none;
}

.marquee {
    position: relative;
    height: 350px;
    width: 100%;
    overflow-x: hidden;
}

.maylike-products-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}
`

const Wrapper = styled.div`
max-width: 1000px;
margin: 40px auto 0;
padding: 70px 20px 0;

.product-container {
    display: flex;
    gap: 40px;
    
    @media(max-width: 760px){
        flex-direction: column;

        .product-preview {
            width: 100%;

            .product-image {
                max-width: 100%;
            }

            .product-images {
                flex-wrap: wrap;
            }
        }

        .product-description {
            width: 100%;
        }
    }
}

.product-preview {
    width: 50%;

    .product-image {
        max-width: 450px;
        min-width: 200px;
        width: 100%;
        height: 400px;
        object-fit: cover;
    }

    .product-images {
        display: flex;
        gap: 10px;
        margin-top: 20px;

        img {
            width: 60px;
            height: 60px;
            border-radius: 10px;
            border: 2px solid transparent;
        }

        .selected {
            border-color: #d9d9d973;
        }
    }
}

.product-description {
    width: 50%;
    
    h1 {
        font-size: 1.2rem;
    }

    .rating {
        display: flex;
        gap: 5px;
        align-items: center;
        margin: 10px 0;
        color: var(--green);

        .icon {
            width: 18px;
            min-width: 18px;
            cursor: pointer;
            transition: .3s ease-out;

            :hover {
                transform: scale(1.1);
            }
        }
    }

    .details {
        margin: 30px 0;

        h3 {
            font-size: .9rem;
            opacity: .9;
        }

        p {
            font-size: 1rem;
        }
    }

    .shipping {
        font-size: .8rem;
    }

    .quantity {
        display: flex;
        margin-top: 30px;

        p {
            margin-right: 20px; 
        }

        .quantity-box {
            padding: 5px;
            background: #d9d9d973;
            transition: .3s ease-out;
            cursor: pointer;

            .icon {
                width: 24px;
            }

            :hover {
                background: black;
                color: white;
            }
        }

        .count {
            padding: 5px 20px;
            user-select: none;
        }
    }

    .buttons {
        display: flex;
        margin-top: 30px;
        gap: 20px;

        button {
        outline: none;
        border: none;
        background: none;
        padding: 10px 20px;
        transition: .3s ease-out;
        cursor: pointer;
        font-weight: bold;
        user-select: none;

        :hover {
            opacity: .7;
        }
        }

        .add-to-cart {
            border: 2px solid black;
        }

        .buy-now {
            border: 2px solid black;
            background: black;
            color: white;
        }
    }
}
`

export default ProductItem