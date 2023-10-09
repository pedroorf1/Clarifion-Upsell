import React from 'react'
import { Icon } from '@iconify/react'

import { GenericBox, GenericText } from '../generics/Generics'
import theme from '@/theme/global/style'

export const Card = ({ text, iconName = 'mdi-light:home', style }) => {
    const boxStyle = {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '300px',
        fontSize: theme.baseFonts.fontSize.medio,
        textTransform: 'uppercase',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
    const iconStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        align: 'center',
        margin: '10px',
        width: '22px',
        height: '22px',
    }

    return (
        <GenericBox style={{ ...boxStyle, style }}>
            <Icon icon={iconName} style={iconStyle} />
            <GenericText>{text}</GenericText>
        </GenericBox>
    )
}
