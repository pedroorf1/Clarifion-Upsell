import ScreenProvider from '@/context'
import Initial from '@/pages/home'

export default function Home() {
    return (
        <ScreenProvider>
            <Initial />
        </ScreenProvider>
    )
}
