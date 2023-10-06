import React from 'react'

import theme from '@/theme/global/style'
import { commentsList } from '@/mochs/comments'
import { Score } from '@/components/Score'
import {
    GenericBox,
    GenericImg,
    GenericText,
    Badge,
} from '@/components/generics/Generics.js'

import verified from '@/components/Comments/imgs/verify1.png'

export const Comments = ({
    text,
    userScore,
    userName,
    userStatus,
    comments = commentsList,
}) => {
    return comments?.map((comment) => (
        <GenericBox
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
            key={comment?.text}
        >
            <Badge>
                <GenericImg
                    imgSrc={comment.img}
                    style={{ marginRight: '13px' }}
                />
                <Score
                    score={comment.userScore}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        position: 'relative',
                        margin: '0px',
                        top: '-15px',
                    }}
                />
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
