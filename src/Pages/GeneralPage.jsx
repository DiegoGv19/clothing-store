import { Outlet } from "react-router-dom"
import Header from "../Components/General/Herder/Header/Header"

const GeneralPage = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default GeneralPage