import axios from "axios"
import { lazy, useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        axios.get(url)
            .then(res => {
                setTimeout(() => {

                    setData(res.data)
                    setLoading(false)
                }, 400)
            })
            .catch(err => {
                setError(err)
            })


    }, [url])


    return { data, loading, error };


}

export default useFetch