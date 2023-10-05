import React from 'react'

import theme from '@/theme/global/style'
import { nave_list } from '@/mochs/bags-nav'
import { Card } from '@/components/VantagesHeaderComponent'
import {
    GenericContainer,
    GenericBox,
    GenericImg,
} from '@/components/generics/Generics.js'

import Logo from '@/components/TitleBar/imgs/ClarifionLogo.svg'
import AntiVirus from '@/components/TitleBar/imgs/antvirus.svg'

export const TitleBar = () => {
    return (
        <GenericContainer
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                width: '100%',
                backgroundColor: theme.baseCollors.white,
                color: theme.baseCollors.preto,
            }}
        >
            <GenericBox
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '1500px',
                    height: '96px',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <GenericImg imgSrc={Logo} style={{ maxHeight: '36px' }} />
                <GenericImg imgSrc={AntiVirus} style={{ maxHeight: '36px' }} />
            </GenericBox>
        </GenericContainer>
    )
}
