import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/components'
import { Home, NotMatch } from '@/pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    )
}
