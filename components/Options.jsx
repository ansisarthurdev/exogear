import React from 'react'
import styled from 'styled-components'

//icons
import { CarOutline } from '@styled-icons/evaicons-outline/CarOutline'
import { MoneyHand } from '@styled-icons/fluentui-system-regular/MoneyHand'
import { Support } from '@styled-icons/boxicons-regular/Support'
import { SecurePayment } from '@styled-icons/remix-fill/SecurePayment'

const Options = () => {

return(
    <Wrapper>
        <div className='option'>
            <CarOutline className='icon' />
            <div className='option-info'>
                <h2>Free shipping</h2>
                <p>Free shipping on orders over €100</p>
            </div>
        </div>

        <div className='option'>
            <MoneyHand className='icon' />
            <div className='option-info'>
                <h2>Money Back Guarantee</h2>
                <p>30 days 100% money back guarantee</p>
            </div>
        </div>

        <div className='option'>
            <Support className='icon' />
            <div className='option-info'>
                <h2>Online support 24/7</h2>
                <p>We will answer your questions</p>
            </div>
        </div>

        <div className='option'>
            <SecurePayment className='icon' />
            <div className='option-info'>
                <h2>Secure payment</h2>
                <p>Stripe payments </p>
            </div>
        </div>
    </Wrapper>
)
}

const Wrapper = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 10px;
background: #000000e3;
color: white;
position: relative;
bottom: 8px;

.option {
display: flex;
flex: 1 0 0;
min-width: 300px;
justify-content: center;
align-items: center;
user-select: none;

.icon {
    width: 24px;
    min-width: 24px;
    margin-right: 20px;
}

.option-info {
    h2 {
        font-size: 1rem;
        text-transform: uppercase;
    }

    p {
        font-size: .6rem;
        text-transform: uppercase;
        opacity: .7;
    }
}
}
`

export default Options