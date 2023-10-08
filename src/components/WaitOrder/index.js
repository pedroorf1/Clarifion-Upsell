import React, { useContext } from 'react'
import { SContexto } from '@/context'

import theme from '@/theme/global/style'
import {
    GenericContainer,
    GenericBox,
    GenericText,
} from '@/components/generics/Generics.js'

export const WaitOrder = () => {
    const { _screen, _screenSizes } = useContext(SContexto)
    return (
        <GenericContainer
            style={{
                display: 'flex',
                position: 'relative',
                top: -150,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: theme.baseCollors.white,
                color: theme.baseCollors.preto,
                Height: _screenSizes.largura < 430 ? '200px' : '120px',
            }}
        >
            <GenericBox
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 0,
                    width: _screen != 360 ? '636.5px' : '100%',
                    justifyContent:
                        _screen != 360 ? 'space-around' : 'space-between',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 135,
                }}
            >
                <GenericText
                    style={{
                        fontSize: _screen != 360 ? '48px' : '32px',
                        fontStyle: 'regular',
                        margin: _screen != 360 ? null : '0 auto',
                        textAlign: _screen != 360 ? null : 'center',
                    }}
                >
                    Wait ! You Order In Progress.
                </GenericText>
                <GenericText
                    style={{
                        display: 'flex',
                        position: 'relative',
                        fontSize: _screen != 360 ? '24px' : '16px',
                        fontStyle: 'regular',
                        margin: _screen != 360 ? null : '0 auto',
                        textAlign: _screen != 360 ? null : 'center',
                        marginTop: _screen != 360 ? null : '10px',
                    }}
                >
                    Lorem Ipsum Dolor Sit Amet, consectetur Adipiscing.
                </GenericText>
            </GenericBox>
        </GenericContainer>
    )
}
