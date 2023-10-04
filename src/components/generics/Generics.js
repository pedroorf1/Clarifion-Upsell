'use client'
import React from 'react'

export const GenericContainer = ({ style, children }) => {
    if (style === undefined) {
        style = {
            display: 'flex',
            width: '100%',
            height: '100%',
        }
    }
    return <div style={style}>{children}</div>
}

export const GenericButton = ({ style, text, props }) => {
    if (style === undefined) {
        style = {
            display: 'flex',
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
        }
    }
    return <section style={style}>{children}</section>
}

export const GenericText = ({ style, children }) => {
    if (style === undefined) {
        style = {
            display: 'flex',
        }
    }
    return <text style={style}>{children}</text>
}
