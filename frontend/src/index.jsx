import React from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './css/style.css'
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/home'

const container = document.getElementById('root')
const root = createRoot(container)
function App () {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
