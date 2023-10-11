import React, { useContext } from 'react'
import { SContexto } from '@/context'

import theme from '@/theme/global/style'
import { GenericContainer } from '@/components/generics/Generics.js'
import { BodyLeft } from '@/components/BodyProduct/BodyLeft'
import { BodyRight } from '@/components/BodyProduct/BodyRight'

export const BodyProduct = () => {
    const { _screenSizes } = useContext(SContexto)

    return (
        <GenericContainer
            style={{
                flexDirection: 'row',
                position: 'relative',
                maxWidth: '1200px',
                minWidth: '360px',
                rowGap: '1rem',
                wordSpacing: 'nowrap',
                margin: '4rem auto',
                backgroundColor: theme.baseCollors.cinza,
                // padding: _screenSizes.largura < 720 ? '0' : '2rem 0',
                borderRadius: '20px',
                justifyContent: 'center',
                alignItems: 'top',
                color: theme.baseCollors.preto,
            }}
        >
            <BodyLeft />
            <BodyRight />
        </GenericContainer>
    )
}
