import React from 'react'
import { Icon } from '@iconify/react'

import { GenericBox, GenericText } from '../generics/Generics'
import theme from '@/theme/global/style'

export const Card = ({ text, iconName = 'mdi-light:home' }) => {
    const boxStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr ',
        maxWidth: '200px',
        backgroundColor: 'transparent',
        fontSize: theme.baseFonts.fontSize.medio,
        textTransform: 'uppercase',
        flexDirection: 'row !important',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    const iconStyle = {
        align: 'center',
        margin: '10px',
    }

    return (
        <GenericBox style={boxStyle}>
            <Icon icon={iconName} style={iconStyle} />
            <GenericText>{text}</GenericText>
        </GenericBox>
    )
}
