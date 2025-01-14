import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useRequestApi = (endpoint) => {
    const API_URL = import.meta.env.VITE_STORE_API

    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`${API_URL}/${endpoint}`)
        .then(data => {
            setData(data.data)
        })
        .catch(e => console.error(e))
    }, [])

    return data
}

export default useRequestApi