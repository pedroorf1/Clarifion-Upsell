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
    const { _screen, _screenSizes } = useContext(SContexto)
    const iconsStyle = {
        width: _screenSizes.largura > 960 ? '40px' : '20px',
        maxHeight: _screenSizes.largura > 960 ? '40px' : '20px',
        fontSize: _screenSizes.largura > 960 ? '12px' : '8px',
        padding: _screenSizes.largura > 960 ? null : '10px',
    }
    const styleToStepsCard = {
        display: 'flex',
        flexDirection: _screenSizes.largura > 960 ? 'row' : 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        columnGap: '20px',
        fontSize: _screenSizes.largura > 960 ? '20px' : '12px',
        fontStyle: 'regular',
        maxWidth: _screenSizes.largura > 960 ? '100%' : '22%',
    }

    return (
        <GenericContainer
            style={{
                position: 'relative',
                marginTop:
                    _screenSizes.largura < 600 && _screenSizes.largura > 430
                        ? '60px'
                        : _screenSizes.largura < 430
                        ? '120px'
                        : '88px',
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
                    position: 'relative',
                    marginTop: 'auto',
                    flexDirection: 'row',
                    width: _screen != 360 ? '1245px' : '100%',
                    maxHeight: _screen != 360 ? '40px' : '20px',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    position: 'absolute',
                    wordWrap: 'nowrap',
                    rowGap: '24px',
                }}
            >
                <GenericBox style={styleToStepsCard}>
                    <GenericImg imgSrc={done} style={iconsStyle} />
                    {_screenSizes.largura > 600 ? (
                        <GenericText>Step1: Cart Review</GenericText>
                    ) : (
                        <GenericText>Cart Review</GenericText>
                    )}
                </GenericBox>
                <GenericBox style={styleToStepsCard}>
                    <GenericImg imgSrc={done} style={iconsStyle} />
                    {_screenSizes.largura > 600 ? (
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
                    {_screenSizes.largura > 600 ? (
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
                    {_screenSizes.largura > 600 ? (
                        <GenericText>Step4: Confirmation</GenericText>
                    ) : (
                        <GenericText>Confirmation</GenericText>
                    )}
                </GenericBox>
            </GenericBox>
        </GenericContainer>
    )
}
