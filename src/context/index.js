'use client'
import React, { createContext } from 'react'

const sm = null
export const SContexto = createContext(null)
const ScreenProvider = ({ children }) => {
    const [_screen, setScreen] = React.useState({
        largura: parseInt(document.body.clientWidth),
        altura: parseInt(document.body.clientHeight),
    })
    const [_screenSizes, setScreenSizes] = React.useState({
        largura: parseInt(document.body.clientWidth),
        altura: parseInt(document.body.clientHeight),
    })

    return (
        <SContexto.Provider
            value={{ _screen, setScreen, _screenSizes, setScreenSizes }}
        >
            {children}
        </SContexto.Provider>
    )
}

export default ScreenProvider
