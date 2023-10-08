'use client'
import React, { createContext } from 'react'

const sm = 360
export const SContexto = createContext(null)
const ScreenProvider = ({ children }) => {
    const [_screen, setScreen] = React.useState(sm)
    const [_screenSizes, setScreenSizes] = React.useState({
        largura: 360,
        altura: 600,
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
