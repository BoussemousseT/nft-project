import React from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/home'
import Collection from './component/collection'
import AllNftCollections from './component/allNftCollections.jsx'
import DetailNft from './component/detailNft.jsx'
import Donate from './component/donate.jsx'
import Account from './component/account.jsx'

import './bootstrap/css/bootstrap.min.css'
import './bootstrap/js/bootstrap.bundle.min.js'
import 'popper.js'
import './css/style.css'
import About from './component/about.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

function App () {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/collection' element={<Collection />} />
                <Route path='/collection/:symbol' element={<AllNftCollections />} />
                <Route path='/collection/:symbol/:tokenMint' element={<DetailNft />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/account/:connexion' element={<Account />} />
                <Route path='/about' element={<About />} />

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
