'use client'
import React from 'react'
import { useContext } from 'react'
import { SContexto } from '@/context'

import { Container } from '@/components/BaseContainer'
import { Nav } from '@/components/nav'
import { TitleBar } from '@/components/TitleBar'
import { WaitOrder } from '@/components/WaitOrder'
import { Steps } from '@/components/Steps'
import { BodyProduct } from '@/components/BodyProduct'
import { Footer } from '@/components/footer'

const Initial = () => {
    const screenContext = useContext(SContexto)

    let displaySize = null

    let mediaMatch = null
    const [matches, setMatches] = React.useState(null)
    if (window?.matchMedia) {
        mediaMatch = window.matchMedia('(max-width: 1245px)')
        if (mediaMatch.matches) displaySize = 1245
        mediaMatch = window.matchMedia('(max-width: 900px)')
        if (mediaMatch.matches) displaySize = 900
        mediaMatch = window.matchMedia('(max-width: 800px)')
        if (mediaMatch.matches) displaySize = 800
        mediaMatch = window.matchMedia('(max-width: 720px)')
        if (mediaMatch.matches) displaySize = 720
        mediaMatch = window.matchMedia('(max-width: 480px)')
        if (mediaMatch.matches) displaySize = 480
        mediaMatch = window.matchMedia('(max-width: 360px)')
        if (mediaMatch.matches) displaySize = 360
    }

    React.useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        mediaMatch.addListener(handler)
        screenContext.setScreen({
            largura: displaySize,
            altura: parseInt(document.body.clientHeight),
        })
        const listener = () =>
            screenContext.setScreenSizes({
                largura: parseInt(document.body.clientWidth),
                altura: parseInt(document.body.clientHeight),
            })
        window.addEventListener('resize', listener)

        return () => {
            mediaMatch.removeListener(handler)
            window.removeEventListener('resize', listener)
        }
    }, [])

    return mediaMatch ? (
        <>
            <Container
                style={{ width: '100%', minWidth: '360px', maxWidth: '1445px' }}
            >
                <Nav />
                <TitleBar />
                <WaitOrder />
                <Steps />
                <BodyProduct />
            </Container>
            <Footer />
        </>
    ) : null
}

export default Initial
