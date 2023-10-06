import React from 'react'

import theme from '@/theme/global/style'

import { commentsList } from '@/mochs/comments'

import {
    GenericBox,
    GenericImg,
    GenericText,
    Badge,
} from '@/components/generics/Generics.js'

import star from '@/components/Comments/imgs/star.svg'

export const Comments = ({ img, text, userScore, userName, userStatus }) => {
    return commentsList?.map((comment) => (
        <GenericBox
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
            key={comment?.text}
        >
            <Badge>
                <GenericImg imgSrc={() => comment?.img} />
            </Badge>
            <GenericText
                style={{
                    textAlign: 'justify',
                    fontSize: theme.baseFonts.fontSize.medio,
                    padding: '24px',
                }}
            >
                {comment?.text}
            </GenericText>
        </GenericBox>
    ))
}
