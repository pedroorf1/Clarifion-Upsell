'use client'
import React from 'react'

import { Container } from '@/components/BaseContainer'
import { Nav } from '@/components/nav'
import { TitleBar } from '@/components/TitleBar'
import { WaitOrder } from '@/components/WaitOrder'
import { Steps } from '@/components/Steps'
import { BodyProduct } from '@/components/BodyProduct'

const Initial = () => {
    return (
        <Container>
            <Nav />
            <TitleBar />
            <WaitOrder />
            <Steps />
            <BodyProduct />
        </Container>
    )
}

export default Initial
