import React from 'react'

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
    const styleToStepsCard = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        columnGap: '20px',
        fontSize: '20px',
        fontStyle: 'regular',
    }

    return (
        <GenericContainer
            style={{
                position: 'relative',
                marginTop: '120px',
                display: 'flex',
                flexDirection: 'column',
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
                    width: '1245px',
                    height: '40px',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    position: 'absolute',
                    rowGap: '24px',
                }}
            >
                <GenericBox style={styleToStepsCard}>
                    <GenericImg imgSrc={done} />
                    <GenericText>Step1: Cart Review</GenericText>
                </GenericBox>
                <GenericBox style={styleToStepsCard}>
                    <GenericImg imgSrc={done} />
                    <GenericText>Step2: Checkout</GenericText>
                </GenericBox>
                <GenericBox style={styleToStepsCard}>
                    <GenericImg imgSrc={todo} middleText="3" />
                    <GenericText>Step3: Special Offer</GenericText>
                </GenericBox>
                <GenericBox style={styleToStepsCard}>
                    <GenericImg
                        imgSrc={doing}
                        middleText="4"
                        textStyle={{
                            color: theme.baseCollors.azul,
                        }}
                    />
                    <GenericText>Step4: Confirmation</GenericText>
                </GenericBox>
            </GenericBox>
        </GenericContainer>
    )
}
