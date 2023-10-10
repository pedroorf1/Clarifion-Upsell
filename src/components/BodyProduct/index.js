import React, { useContext } from 'react'
import { SContexto } from '@/context'

import theme from '@/theme/global/style'
import {
    GenericContainer,
    GenericBox,
    GenericImg,
} from '@/components/generics/Generics.js'

import { BodyLeft } from '@/components/BodyProduct/BodyLeft'

//import imgs
import productLargeImg from '@/components/BodyProduct/imgs/productLargeImg.png'
import { Comments } from '../Comments'

export const BodyProduct = () => {
    const { _screen, _screenSizes } = useContext(SContexto)

    return (
        <GenericContainer
            style={{
                flexDirection: 'column',
                position: 'relative',
                maxWidth: '1245px',
                minWidth: '360px',
                wordSpacing: 'nowrap',
                margin: _screenSizes.largura < 800 ? '4rem auto' : '4rem auto',
                backgroundColor: theme.baseCollors.cinza,
                padding: _screenSizes.largura < 720 ? '0' : '2rem',
                borderRadius: '20px',
                justifyContent: 'center',
                alignItems: 'top',
                color: theme.baseCollors.preto,
            }}
        >
            <BodyLeft />
        </GenericContainer>
    )
}
