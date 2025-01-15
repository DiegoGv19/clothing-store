import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './Context/UserContext.jsx'

import GeneralPage from './Pages/GeneralPage/GeneralPage.jsx'
import CategoriesStore from './Pages/CategoriesStore/CategoriesStore.jsx'
import CategoryStore from './Pages/CategoryStore/CategoryStore.jsx'
import LoginPage from './Pages/Login/LoginPage.jsx'
import MainStore from './Pages/MainStore/MainStore.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import ProfilePage from './Pages/Profile/ProfilePage.jsx'
import ProductStore from './Pages/ProductStore/ProductStore.jsx'

import "./main.css"

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
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
                <Route path='profile' element={<GeneralPage />}>
                    <Route index element={<ProfilePage />} />
                </Route>
                <Route path='login' element={<LoginPage />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
