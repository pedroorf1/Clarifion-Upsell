'use client'
import React from 'react'

export const GenericContainer = ({ style, children }) => {
    if (style === undefined) {
        style = {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',
        }
    } else {
        style = {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',
            ...style,
        }
    }
    return <div style={style}>{children}</div>
}

export const Badge = ({ style, children }) => {
    if (style === undefined) {
        style = {
            backgroundColor: 'transparent',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            Width: '100%',
            padding: '20px',
        }
    } else {
        style = {
            backgroundColor: 'transparent',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            maxWidth: '100%',
            padding: '20px',
            ...style,
        }
    }
    return <div style={style}>{children}</div>
}

export const GenericButton = ({ style, text, props }) => {
    if (style === undefined) {
        style = {
            display: 'flex',
        }
    } else {
        style = {
            display: 'flex',
            ...style,
        }
    }
    return (
        <button style={style} props={props}>
            {text}
        </button>
    )
}

export const GenericBox = ({ style, children }) => {
    if (style === undefined) {
        style = {
            display: 'flex',
            flexWrap: 'wrap',
        }
    } else {
        style = {
            display: 'flex',
            flexWrap: 'wrap',
            ...style,
        }
    }
    return <section style={style}>{children}</section>
}

export const GenericText = ({ style, children }) => {
    if (style === undefined) {
        style = {
            display: 'flex',
            flexWrap: 'wrap',
        }
    } else {
        style = {
            display: 'flex',
            flexWrap: 'wrap',
            ...style,
        }
    }
    return <span style={style}>{children}</span>
}

export const GenericImg = ({ style, imgSrc, middleText, textStyle }) => {
    const mathSvg = /.svg/g
    const source = !imgSrc?.src ? imgSrc : imgSrc.src

    if (style === undefined) {
        style = {
            display: 'flex',
        }
    } else {
        style = {
            display: 'flex',
            ...style,
        }
    }
    const midText = (
        <span
            style={{
                display: 'flex',
                position: 'absolute',
                color: 'white',
                fontSize: '20px',
                fontStyle: 'regular',
                color: 'white',
                ...textStyle,
            }}
        >
            {middleText}
        </span>
    )
    if (String(imgSrc?.src).match(mathSvg)) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {middleText ? midText : null}
                <img style={style} src={source} />
            </div>
        )
    } else {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {middleText ? midText : null}
                <img style={style} src={source} />
            </div>
        )
    }
}
