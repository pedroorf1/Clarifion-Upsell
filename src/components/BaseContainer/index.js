import React from 'react'
import { GenericContainer } from '../generics/Generics'

export const Container = ({ children }) => {
    return (
        <GenericContainer
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                width: '100%',
                height: '100%',
            }}
        >
            {children}
        </GenericContainer>
    )
}
