import React from 'react'

import starYellow from './imgs/starYellow.svg'
import starBordered from './imgs/starBordered.svg'
import { GenericBox, GenericImg } from '../generics/Generics'

export const Score = ({ score = 0, style }) => {
    const toSliceScore = 'loren ipsum dolor sit amet'
    const Value = [...toSliceScore.slice(0, score)]
    const imgStyle = {
        display: 'flex',
        position: 'relative',
        padding: '0px',
        border: 'none',
        width: '11.95px',
        height: '11.95px',
        margin: '5px',
        top: '0px !important',
    }

    return (
        <GenericBox style={style}>
            {Value.map((item, index) =>
                index == 2 ? (
                    <GenericImg
                        imgSrc={starYellow}
                        style={imgStyle}
                        key={index + 'score'}
                    />
                ) : (
                    <GenericImg
                        imgSrc={starBordered}
                        style={imgStyle}
                        key={index + 'score'}
                    />
                )
            )}
        </GenericBox>
    )
}
