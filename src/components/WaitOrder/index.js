import React from 'react'

import theme from '@/theme/global/style'
import {
    GenericContainer,
    GenericBox,
    GenericText,
} from '@/components/generics/Generics.js'

export const WaitOrder = () => {
    return (
        <GenericContainer
            style={{
                marginTop: '-11px',
                marginBottom: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: theme.baseCollors.white,
                color: theme.baseCollors.preto,
            }}
        >
            <GenericBox
                style={{
                    display: 'flex',
                    marginTop: 0,
                    flexDirection: 'column',
                    width: '636.5px',
                    height: '78px',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 135,
                    rowGap: '24px',
                }}
            >
                <GenericText
                    style={{
                        fontSize: '48px',
                        fontStyle: 'regular',
                    }}
                >
                    Wait ! You Order In Progress.
                </GenericText>
                <GenericText
                    style={{
                        fontSize: '24px',
                        fontStyle: 'regular',
                    }}
                >
                    Lorem Ipsum Dolor Sit Amet, consectetur Adipiscing.
                </GenericText>
            </GenericBox>
        </GenericContainer>
    )
}
