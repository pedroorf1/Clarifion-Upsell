import React, { useContext } from 'react'
import { SContexto } from '@/context'

import theme from '@/theme/global/style'
import {
    Badge,
    GenericBox,
    GenericImg,
    GenericText,
} from '@/components/generics/Generics.js'

//import imgs

export const BodyRight = () => {
    const { _screenSizes } = useContext(SContexto)

    const contentStyle = {
        position: 'relative',
        flexDirection: 'column',
        margin:
            _screenSizes.largura > 0 && _screenSizes.largura < 720
                ? '1rem auto'
                : '0 auto',
        maxWidth: 'calc(575px - 20px)',
        minWidth: 'calc(360px - 10px)',
        minHeight: 'calc(100vh - 20px)',
    }

    return (
        <GenericBox style={{ ...contentStyle }}>
            <GenericBox
                style={{
                    width: '100%',
                    height: '188px',
                    marginTop: '24px',
                    borderRadius: '20px',
                    backgroundColor: 'transparent',
                }}
            >
                <GenericBox
                    style={{
                        width: '100%',
                        padding: '10px',
                        flexDirection: 'column',
                        backgroundColor: 'transparent',
                    }}
                >
                    <Badge>
                        <GenericText>ONE TIME ONLY</GenericText>
                        <GenericText>Special Price For 6</GenericText>
                        <GenericText>Extra Clarifion For Only</GenericText>
                        <GenericText>
                            $14 Each
                            <br />
                        </GenericText>
                        <GenericText>($84.00 Total)</GenericText>
                    </Badge>
                </GenericBox>
                <GenericBox
                    style={{
                        padding: '10px',
                        justifyContent: 'center',
                        alignItems: 'top',
                        height: '100%',
                        width: '100%',
                        display: 'grid',
                        gap: '1rem',
                        gridTemplateColumns: 'auto 1fr',
                        gridTemplateRows: '1fr 1fr 1fr',
                        gridTemplateAreas: `
                                                "image text"
                                                "image text"
                                                "image text" `,
                    }}
                >
                    <GenericImg
                        imgSrc="/imgsproducts/ionizer.png"
                        style={{
                            gridArea: 'image',
                            width:
                                _screenSizes.largura > 600 ? '135px' : '80px',
                            verticalAlign: 'middle',
                        }}
                    />
                    <GenericBox
                        style={{
                            gridArea: 'text',
                        }}
                    >
                        <Badge>
                            <GenericText>Clarifion Air Ionizer</GenericText>
                            <GenericText>$180</GenericText>
                            <GenericText>$84</GenericText>
                        </Badge>
                        <GenericText>* 12 left in stock</GenericText>
                        <GenericText>
                            Simply plug a Clarifion into any standard outled and
                            replace bulky, expensive air purifies with a simple.
                        </GenericText>
                    </GenericBox>
                </GenericBox>
                <GenericBox>
                    <GenericText>
                        - Negative Ion Technology may{' '}
                        <strong> help with allergens</strong>
                    </GenericText>
                    <GenericText>help with allergens</GenericText>
                    <GenericText>Extra Clarifion For Only</GenericText>
                    <GenericText>$14 Each</GenericText>
                    <GenericText>($84.00 Total)</GenericText>
                </GenericBox>
            </GenericBox>
        </GenericBox>
    )
}
