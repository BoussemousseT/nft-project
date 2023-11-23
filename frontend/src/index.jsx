import React from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/home'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/js/bootstrap.bundle.min.js'
import 'popper.js'
import './css/style.css'

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
