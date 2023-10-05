import React from 'react'

import theme from '@/theme/global/style'
import { nave_list } from '@/mochs/bags-nav'
import { Card } from '@/components/VantagesHeaderComponent'
import { GenericContainer, GenericBox } from '@/components/generics/Generics.js'

export const Nav = () => {
    return (
        <GenericContainer
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                width: '100%',
                backgroundColor: theme.naveBaseCollors.backgroundColor,
            }}
        >
            <GenericBox
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '1500px',
                    height: '50px',
                    color: 'white',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                {nave_list.map((item) => (
                    <Card
                        text={item.text}
                        iconName={item.iconName}
                        key={item.text}
                    />
                ))}
            </GenericBox>
        </GenericContainer>
    )
}
