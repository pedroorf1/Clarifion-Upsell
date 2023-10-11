import React, { useContext } from 'react'
import { SContexto } from '@/context'

import theme from '@/theme/global/style'
import {
    GenericContainer,
    GenericBox,
    GenericImg,
} from '@/components/generics/Generics.js'

//import imgs
import { Comments } from '../../Comments'

export const BodyRight = () => {
    const { _screen, _screenSizes } = useContext(SContexto)

    const contentStyle = {
        position: 'relative',
        flexDirection: 'column',
        margin:
            _screenSizes.largura > 0 && _screenSizes.largura < 720
                ? '1rem auto'
                : '0 auto',
        maxWidth: 'calc(575px - 80px)',
        minWidth: 'calc(360px - 40px)',
    }

    return (
        <GenericBox style={{ ...contentStyle }}>
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
    )
}
