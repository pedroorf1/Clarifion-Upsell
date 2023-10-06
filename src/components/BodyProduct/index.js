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
        maxWidth: '100%',
        marginTop: '40px',
        marginBottom: '40px',
        flexDirection: 'column',
        wordWrap: 'break-word',
        borderRadius: '10px',
    }

    return (
        <GenericContainer
            style={{
                position: 'relative',
                display: 'flex',
                maxWidth: '1245px',
                wordSpacing: 'nowrap',
                marginTop: '60px',
                justifyContent: 'center',
                alignItems: 'center',
                color: theme.baseCollors.preto,
            }}
        >
            <GenericBox
                style={{
                    display: 'grid',
                    gridTemplateColumns: '575px 575px',
                    columnGap: '40px',
                    position: 'relative',
                    backgroundColor: '#FAFAFA',
                }}
            >
                <GenericBox style={{ ...contentStyle, marginLeft: '40px' }}>
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
                            backgroundColor: theme.baseCollors.vermelho,
                        }}
                    >
                        <Comments />
                    </GenericBox>
                </GenericBox>
                <GenericBox
                    style={{
                        ...contentStyle,
                        marginRight: '40px',
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
