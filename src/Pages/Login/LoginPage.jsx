import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import "./LoginPage.css"
import StringUpperCase from "../../Helpers/StringUpperCase"

/*
    {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
*/

const LoginPage = () => {
    const API_URL = import.meta.env.VITE_LOGIN_API

    const navigation = useNavigate()

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    )

    const setEmail = (e) => {
        setUser({
            ...user,
            email: e.target.value
        })
    }

    const setPassword = (e) => {
        setUser({
            ...user,
            password: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        setError(null)
        setCargando(true)
        axios.post(`${API_URL}`, user)
        .then(data => {
            setCargando(false)
            localStorage.setItem("store-login-token", data.data.token)
            navigation("/")
        })
        .catch(e => {
            setCargando(false)
            setError(e.response.data.error)
        })
    }

    if (localStorage.getItem("store-login-token")) return <Navigate to="/" />

    return (
        <section className="login-section">
            <form className="login-form" onSubmit={submit}>
                <h1 className="login-section-title">Login</h1>
                <div className="login-form-param">
                    <label className="login-form-label" htmlFor="email">Email</label>
                    <input className="login-form-input" onChange={setEmail} type="emali" name="email" placeholder="clothingstore@hotmail.com" />
                </div>
                <div className="login-form-param">
                    <label className="login-form-label" htmlFor="password">Password</label>
                    <input className="login-form-input" onChange={setPassword} type="password" name="password" placeholder="password" />
                </div>
                <div className="login-form-button-container">
                    <input className="login-form-button" type="submit" value={cargando ? "Cargando" : "Ingresar"} />
                </div>
                {
                    error && (
                        <span className="login-form-error">Error: {error}</span>
                    )
                }
            </form>
        </section>
    )
}

export default LoginPage