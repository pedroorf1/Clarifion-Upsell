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
                maxWidth: '100%',
                minWidth: '360px',
                overflow: 'hidden',
                backgroundColor: theme.naveBaseCollors.backgroundColor,
            }}
        >
            <GenericBox
                style={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    width: '100%',
                    maxWidth: '1245px',
                    height: '50px',
                    color: 'white',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    scrollBehavior: 'smooth',
                    overflow: 'hidden',
                    border: '0',
                    margin: '0 auto',
                    WebkitOverflowScrollin: 'touch',
                    msOverflowStyle: '-ms-autohiding-scrollbar',
                    transform: 'translateX(-5px)',
                    transition: 'transform 0.5s',
                    backgroundColor: 'transparent',
                }}
            >
                {nave_list.map((item, index) => (
                    <Card
                        text={item.text}
                        iconName={item.iconName}
                        key={index + 'text'}
                        style={{
                            flex: '0 0 auto',
                            backgroundColor: 'transparent',
                        }}
                    />
                ))}
            </GenericBox>
        </GenericContainer>
    )
}
