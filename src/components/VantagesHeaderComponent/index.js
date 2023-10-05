import React from 'react'
import { Icon } from '@iconify/react'

import { GenericBox, GenericText } from '../generics/Generics'
import theme from '@/theme/global/style'

export const Card = ({ text, iconName = 'mdi-light:home' }) => {
    const boxStyle = {
        display: 'flex',
        fontSize: theme.baseFonts.fontSize.medio,
        textTransform: 'uppercase',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
    const iconStyle = {
        align: 'center',
        margin: '10px',
        width: '22px',
        height: '22px',
    }

    return (
        <GenericBox style={boxStyle}>
            <Icon icon={iconName} style={iconStyle} />
            <GenericText>{text}</GenericText>
        </GenericBox>
    )
}
