import React from 'react'
import styled from 'styled-components'

//icons
import { CarOutline } from '@styled-icons/evaicons-outline/CarOutline'
import { MoneyHand } from '@styled-icons/fluentui-system-regular/MoneyHand'
import { Support } from '@styled-icons/boxicons-regular/Support'
import { SecurePayment } from '@styled-icons/remix-fill/SecurePayment'

const Options = () => {

    const options = [{
        heading: 'Free shipping',
        info: 'Free shipping on orders over €100',
        Icon: CarOutline
    }, {
        heading: 'Money Back Guarantee',
        info: '30 days 100% money back guarantee',
        Icon: MoneyHand
    }, {
        heading: 'Online support 24/7',
        info: 'We will answer your questions',
        Icon: Support
    }, {
        heading: 'Secure payment',
        info: 'Powered by Stripe',
        Icon: SecurePayment
    }]

return(
    <Wrapper>
        {options?.map(option => {
            const { heading, info, Icon } = option;

            return (
                <div className="option" key={heading}>
                    <Icon className='icon' />
                    <div className="option-info">
                        <h2>{heading}</h2>
                        <p>{info}</p>
                    </div>
                </div>
            )
        })}
    </Wrapper>
)
}

const Wrapper = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 10px;
background: var(--green);
color: white;
position: relative;
bottom: 8px;

.option {
display: flex;
min-width: 260px;
justify-content: flex-start;
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