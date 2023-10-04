import React from 'react'

const GenericContainer = ({ style, children }) => {
    if (style === undefined) {
        style = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
        }
    }
    return <div style={style}>{children}</div>
}

const GenericButton = ({ style, text, props }) => {
    if (style === undefined) {
        style = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
    return (
        <button style={style} props={props}>
            {text}
        </button>
    )
}

export default { GenericContainer, GenericButton }
