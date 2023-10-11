'use client'
import React from 'react'

import theme from '@/theme/global/style'

export const GenericContainer = ({ style, children }) => {
    let styleLocal = {}
    if (style === undefined) {
        styleLocal = {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',
            backgroundColor: theme.baseCollors.branco,
        }
    } else {
        styleLocal = {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',
            backgroundColor: theme.baseCollors.branco,
            ...style,
        }
    }
    return <div style={styleLocal}>{children}</div>
}

export const Badge = ({ style, children }) => {
    let styleLocal = {}
    if (style === undefined) {
        styleLocal = {
            backgroundColor: theme.baseCollors.branco,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            Width: '100%',
            padding: '20px',
        }
    } else {
        styleLocal = {
            backgroundColor: theme.baseCollors.branco,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            maxWidth: '100%',
            padding: '20px',
            ...style,
        }
    }
    return <div style={styleLocal}>{children}</div>
}

export const GenericButton = ({ style, text, props }) => {
    let styleLocal = {}
    if (style === undefined) {
        styleLocal = {
            backgroundColor: theme.baseCollors.branco,
            display: 'flex',
        }
    } else {
        styleLocal = {
            backgroundColor: theme.baseCollors.branco,
            display: 'flex',
            ...style,
        }
    }
    return (
        <button style={styleLocal} props={props}>
            {text}
        </button>
    )
}

export const GenericBox = ({ style, children }) => {
    let styleLocal = {}
    if (style === undefined) {
        styleLocal = {
            backgroundColor: theme.baseCollors.branco,
            display: 'flex',
            flexWrap: 'wrap',
        }
    } else {
        styleLocal = {
            backgroundColor: theme.baseCollors.branco,
            display: 'flex',
            flexWrap: 'wrap',
            ...style,
        }
    }
    return <section style={styleLocal}>{children}</section>
}

export const GenericText = ({ style, children }) => {
    let styleLocal = {}
    if (style === undefined) {
        styleLocal = {
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 0.1rem',
            backgroundColor: 'transparent',
        }
    } else {
        styleLocal = {
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 0.1rem',
            backgroundColor: 'transparent',
            ...style,
        }
    }
    return <span style={styleLocal}>{children}</span>
}

export const GenericImg = ({ style, imgSrc, middleText, textStyle }) => {
    let styleLocal = {}
    const mathSvg = /.svg/g
    const source = !imgSrc?.src ? imgSrc : imgSrc.src

    if (style === undefined) {
        styleLocal = {
            backgroundColor: 'transparent',
            display: 'flex',
        }
    } else {
        styleLocal = {
            backgroundColor: 'transparent',
            display: 'flex',
            ...style,
        }
    }
    const midText = (
        <span
            style={{
                backgroundColor: 'transparent',
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
                <img style={styleLocal} src={source} />
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
