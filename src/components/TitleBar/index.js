import React, { useContext } from 'react'
import { SContexto } from '@/context'

import theme from '@/theme/global/style'
import {
    GenericContainer,
    GenericBox,
    GenericImg,
} from '@/components/generics/Generics.js'

import Logo from '@/components/TitleBar/imgs/ClarifionLogo.svg'
import AntiVirus from '@/components/TitleBar/imgs/antvirus.svg'

export const TitleBar = () => {
    const { _screen, _screenSizes } = useContext(SContexto)
    return (
        <GenericContainer
            style={{
                display: 'flex',
                width: '100%',
                minWidth: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                wordWrap: 'nowrap',
                border: '0',
                margin: '0',
                // marginTop: _screenSizes.largura < 600 ? '0px' : '0px',
                width: _screenSizes,
                backgroundColor: theme.baseCollors.white,
                color: theme.baseCollors.preto,
            }}
        >
            <GenericBox
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    maxWidth: '1445px',
                    minWidth: '320px',
                    height: _screenSizes.largura < 600 ? '60px' : '96px',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <GenericImg
                    imgSrc={Logo}
                    style={{
                        maxHeight: _screenSizes.largura < 600 ? '20px' : '36px',
                    }}
                />
                <GenericImg
                    imgSrc={AntiVirus}
                    style={{
                        maxHeight: _screenSizes.largura < 600 ? '20px' : '36px',
                    }}
                />
            </GenericBox>
        </GenericContainer>
    )
}
