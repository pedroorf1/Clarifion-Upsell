'use client'
import React from 'react'

import theme from '@/theme/global/style'

import {
    GenericContainer,
    GenericButton,
    GenericBox,
    GenericText,
} from '@/components/generics/Generics.js'

import { Card } from '@/components/VantagesHeaderComponent'

const Initial = () => {
    return (
        <GenericContainer>
            <GenericBox
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr ifr 1fr',
                    backgroundColor: 'black',
                    width: '100%',
                    height: '50px',
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Card text="Ola mundo" />
                <Card text="Ola mundo" />
                <Card text="Ola mundo" />
                <Card text="Ola mundo" />
            </GenericBox>
        </GenericContainer>
    )
}

export default Initial
