import React from 'react'
import { Icon } from '@iconify/react'

import { GenericBox, GenericContainer } from '../generics/Generics'

export const Footer = () => {
    const stylesContainer = {
        position: 'relative',
        bottom: '0',
        width: '100%',
        minHeight: '80px',
        height: 'auto',
        minwidth: '340px',
        backgroundColor: '#252F3D',
        color: '#fff',
        margin: '0',
        padding: '1rem 0',
        border: '0',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

    const iconStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        align: 'center',
        margin: '1px !important',
        width: '16px',
        height: '16px',
        backgroundColor: 'transparent',
    }

    const bagStyle = {
        fontSize: '12px',
        fontWeight: 'normal',
        gap: '1px',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        align: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxWidth: '400px',
        backgroundColor: 'transparent',
    }

    return (
        <GenericContainer style={stylesContainer}>
            <GenericBox style={bagStyle}>
                Copyright (C) 2023 | clarifionsupport@clarifion.com
            </GenericBox>
            <GenericBox style={bagStyle}>
                <Icon icon="prime:lock" style={iconStyle} />
                Secure 256-Bit SSL Ecriptation
            </GenericBox>
        </GenericContainer>
    )
}
