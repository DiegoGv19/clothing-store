import { Navigate, Outlet } from "react-router-dom"
import Header from "../../Components/General/Herder/Header/Header"

const GeneralPage = () => {
    //if (!localStorage.getItem("store-login-token")) return <Navigate to="/login" />

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default GeneralPage