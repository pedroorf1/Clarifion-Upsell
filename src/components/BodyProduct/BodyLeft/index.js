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
import { Comments } from '../../Comments/'

export const BodyLeft = () => {
    const { _screenSizes } = useContext(SContexto)

    const contentStyle = {
        position: 'relative',
        flexDirection: 'column',
        width: '100%',
        margin:
            _screenSizes.largura > 450 && _screenSizes.largura < 720
                ? '1rem auto'
                : '2rem auto',
        maxWidth: 'calc(575px - 40px)',
        minWidth: 'calc(360px - 20px)',
        backgroundColor: 'transparent',
    }

    return (
        <GenericBox style={{ ...contentStyle }}>
            <GenericImg
                imgSrc={productLargeImg}
                style={{
                    width: '100%',
                    maxWidth: '100%',
                    marginLeft: '-5px',
                    borderRadius: '10px',
                }}
            />
            <GenericBox
                style={{
                    width: '100%',
                    height: '188px',
                    marginTop: '24px',
                    borderRadius: '20px',
                }}
            >
                <Comments />
            </GenericBox>
        </GenericBox>
    )
}
