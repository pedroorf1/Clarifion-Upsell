import React, { useContext } from 'react'
import { SContexto } from '@/context'

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
    const { _screen, _screenSizes } = useContext(SContexto)

    const contentStyle = {
        position: 'relative',
        flexDirection: 'column',
        margin: _screenSizes.largura < 400 ? '0' : '0 auto',
        maxWidth: 'calc(575px - 80px)',
        minWidth: 'calc(360px - 40px)',
    }

    return (
        <GenericContainer
            style={{
                flexDirection: 'column',
                position: 'relative',
                maxWidth: '1245px',
                minWidth: '360px',
                wordSpacing: 'nowrap',
                margin:
                    _screenSizes.largura < 800 ? '3rem auto' : '2.5rem auto',
                border: _screenSizes.largura < 800 ? '0' : null,
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
                    gap: _screenSizes.largura < 400 ? '10px' : '20px',
                    backgroundColor: '#FAFAFA',
                    padding: _screenSizes.largura < 400 ? '20px' : '40px',
                }}
            >
                <GenericBox style={{ ...contentStyle }}>
                    <GenericImg
                        imgSrc={productLargeImg}
                        style={{
                            width: '100%',
                            maxWidth:
                                _screenSizes.largura < 380 ? '320px' : '100%',
                            marginLeft:
                                _screenSizes.largura < 400 ? '-1rem' : '0',
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
                        padding: _screenSizes.largura < 400 ? '10px' : '20px',
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
