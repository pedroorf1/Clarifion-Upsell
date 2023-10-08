import React, { useContext } from 'react'
import { SContexto } from '@/context'
import theme from '@/theme/global/style'
import {
    GenericContainer,
    GenericBox,
    GenericImg,
    GenericText,
} from '@/components/generics/Generics.js'

import done from '@/components/Steps/imgs/done.svg'
import todo from '@/components/Steps/imgs/todo.svg'
import doing from '@/components/Steps/imgs/doing.svg'

export const Steps = () => {
    const { _screen } = useContext(SContexto)
    const iconsStyle = {
        width: _screen != 360 ? '40px' : '20px',
        height: _screen != 360 ? '40px' : '20px',
        fontSize: _screen != 360 ? '12px' : '8px',
        padding: _screen != 360 ? null : '10px',
    }
    const styleToStepsCard = {
        display: 'flex',
        flexDirection: _screen != 360 ? 'row' : 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        columnGap: '20px',
        fontSize: _screen != 360 ? '20px' : '12px',
        fontStyle: 'regular',
        maxWidth: _screen != 360 ? '100%' : '22%',
    }

    return (
        <GenericContainer
            style={{
                position: 'relative',
                marginTop: _screen != 360 ? '120px' : '80px',
                display: 'flex',
                flexDirection: 'row',
                wordWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: 'transparent',
                color: theme.baseCollors.preto,
            }}
        >
            <GenericBox
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: _screen != 360 ? '1245px' : '100%',
                    height: _screen != 360 ? '40px' : '20px',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    position: 'absolute',
                    wordWrap: 'nowrap',
                    rowGap: '24px',
                }}
            >
                <GenericBox style={styleToStepsCard}>
                    <GenericImg imgSrc={done} style={iconsStyle} />
                    {_screen != 360 ? (
                        <GenericText>Step1: Cart Review</GenericText>
                    ) : (
                        <GenericText>Cart Review</GenericText>
                    )}
                </GenericBox>
                <GenericBox style={styleToStepsCard}>
                    <GenericImg imgSrc={done} style={iconsStyle} />
                    {_screen != 360 ? (
                        <GenericText>Step2: Checkout</GenericText>
                    ) : (
                        <GenericText>Checkout</GenericText>
                    )}
                </GenericBox>
                <GenericBox style={styleToStepsCard}>
                    <GenericImg
                        imgSrc={todo}
                        middleText="3"
                        style={iconsStyle}
                    />
                    {_screen != 360 ? (
                        <GenericText>Step3: Special Offer</GenericText>
                    ) : (
                        <GenericText>Special Offer</GenericText>
                    )}
                </GenericBox>
                <GenericBox style={styleToStepsCard}>
                    <GenericImg
                        imgSrc={doing}
                        middleText="4"
                        style={iconsStyle}
                        textStyle={{
                            color: theme.baseCollors.azul,
                        }}
                    />
                    {_screen != 360 ? (
                        <GenericText>Step4: Confirmation</GenericText>
                    ) : (
                        <GenericText>Confirmation</GenericText>
                    )}
                </GenericBox>
            </GenericBox>
        </GenericContainer>
    )
}
