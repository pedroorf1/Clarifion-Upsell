import React from 'react'

import theme from '@/theme/global/style'
import {
    GenericContainer,
    GenericBox,
    GenericImg,
} from '@/components/generics/Generics.js'

//import imgs
import productLargeImg from '@/components/BodyProduct/imgs/productLargeImg.png'
import { Comments } from '../Comments'

export const BodyProduct = () => {
    const contentStyle = {
        flexDirection: 'column',
        margin: '0px auto',
        maxWidth: 'calc(575px - 40px)',
    }

    return (
        <GenericContainer
            style={{
                flexDirection: 'column',
                position: 'relative',
                // maxWidth: '1245px',
                // minWidth: '360px',
                width: ['360px', '1245px'],
                wordSpacing: 'nowrap',
                margin: '60px auto',
                justifyContent: 'center',
                alignItems: 'center',
                color: theme.baseCollors.preto,
            }}
        >
            <GenericBox
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                    gap: '40px',
                    backgroundColor: '#FAFAFA',
                    padding: '40px',
                }}
            >
                <GenericBox style={{ ...contentStyle }}>
                    <GenericImg
                        imgSrc={productLargeImg}
                        style={{
                            width: '100%',
                        }}
                    />
                    <GenericBox
                        style={{
                            width: '100%',
                            height: '188px',
                            marginTop: '24px',
                            borderRadius: '20px',
                            backgroundColor: theme.baseCollors.branco,
                        }}
                    >
                        <Comments />
                    </GenericBox>
                </GenericBox>
                <GenericBox
                    style={{
                        ...contentStyle,
                    }}
                >
                    lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                    dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
                    consectetur adip lorem ipsum dolor sit amet, consectetur
                    adip lorem ipsum dolor sit amet, consectetur adip lorem
                    ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
                    amet, consectetur adip lorem ipsum dolor sit amet,
                    consectetur adip lorem ipsum dolor sit amet, consectetur
                    adip lorem ipsum dolor sit amet, consectetur adip lorem
                    ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
                    amet, consectetur adip lorem ipsum dolor sit amet,
                    consectetur adip lorem ipsum dolor sit amet, consectetur
                    adip{' '}
                </GenericBox>
            </GenericBox>
        </GenericContainer>
    )
}
