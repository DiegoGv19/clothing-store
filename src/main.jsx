import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GeneralPage from './Pages/GeneralPage.jsx'
import CategoriesStore from './Pages/CategoriesStore/CategoriesStore.jsx'
import CategoryStore from './Pages/CategoryStore/CategoryStore.jsx'
import MainStore from './Pages/MainStore/MainStore.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import ProductStore from './Pages/ProductStore.jsx'

import "./main.css"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<GeneralPage />}>
                <Route index element={<MainStore />} />
                <Route path='product/:id' element={<ProductStore />}/>
            </Route>
            <Route path='categories' element={<GeneralPage />}>
                <Route index element={<CategoriesStore />} />
                <Route path=':categoryName' element={<CategoryStore />}></Route>
            </Route>
            <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
    </BrowserRouter>)
