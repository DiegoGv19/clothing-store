import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"

const ProfilePage = () => {
    const user = useContext(UserContext)
    
    return (
        <section>
            <h1>{user.name}</h1>
        </section>
    )
}

export default ProfilePage