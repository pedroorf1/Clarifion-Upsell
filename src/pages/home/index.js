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

const Initial = () => {
    const screenContext = useContext(SContexto)

    const sm = 360
    const lg = 1245

    const mediaMatch = window.matchMedia('(max-width: 1244px)')
    const [matches, setMatches] = React.useState(mediaMatch.matches)

    React.useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        mediaMatch.addListener(handler)
        screenContext.setScreen(matches ? sm : lg)
        return () => mediaMatch.removeListener(handler)
    })

    return (
        <Container>
            <p>
                {console.log('\n\n\n: screenConstext: ', screenContext._screen)}
                {console.log(
                    '\n\n\n: document.body.clientWidth: ',
                    document.body.clientWidth
                )}
            </p>
            <Nav />
            <TitleBar />
            <WaitOrder />
            <Steps />
            <BodyProduct />
        </Container>
    )
}

export default Initial
