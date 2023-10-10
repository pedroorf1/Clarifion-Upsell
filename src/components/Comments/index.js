import React, { useContext } from 'react'
import { SContexto } from '@/context'

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
    const { _screen, _screenSizes } = useContext(SContexto)

    return comments?.map((comment) => (
        <GenericBox
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minWidth: '237x',
                marginLeft: _screenSizes.largura < 400 ? '-0.05rem' : '0',
            }}
            key={comment?.text}
        >
            <Badge
                style={{
                    minWidth: '237px',
                    minHeight: '48px',
                    flexDirection: 'row',
                }}
            >
                <GenericImg
                    imgSrc={comment.img}
                    style={{ marginRight: '13px' }}
                />
                <GenericBox
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'flex-start',
                        height: '100%',
                    }}
                >
                    <Score
                        score={comment.userScore}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'relative',
                            margin: '0px',
                        }}
                    />
                    <GenericBox
                        style={{
                            flexDirection: 'row',
                            lineHeight: '1rem',
                            gap: '0.5rem',
                        }}
                    >
                        <GenericText
                            style={{
                                fontSize: '14px',
                                fontWeight: 'bold',
                            }}
                        >
                            Ken T.
                        </GenericText>
                        <GenericImg imgSrc={verified} />
                        <GenericText
                            style={{
                                fontSize: '12px',
                                color: '#5BB59A',
                            }}
                        >
                            Verified Customer
                        </GenericText>
                    </GenericBox>
                </GenericBox>
            </Badge>
            <GenericText
                style={{
                    position: 'relative',
                    minWidth: '300px',
                    marginLeft: '0 auto',
                    textAlign: 'justify',
                    fontSize: theme.baseFonts.fontSize.medio,
                    padding: '24px',
                    marginTop: '-1.5rem',
                }}
            >
                {comment?.text}
            </GenericText>
        </GenericBox>
    ))
}
