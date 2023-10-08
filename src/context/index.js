'use client'
import React, { createContext } from 'react'

const sm = 360
export const SContexto = createContext(null)
const ScreenProvider = ({ children }) => {
    const [_screen, setScreen] = React.useState(sm)
    return (
        <SContexto.Provider value={{ _screen, setScreen }}>
            {children}
        </SContexto.Provider>
    )
}

export default ScreenProvider
