import ScreenProvider from '@/context'
import Initial from '@/pages/home'
import './globals.css'

export default function Home() {
    return (
        <ScreenProvider>
            <Initial />
        </ScreenProvider>
    )
}
