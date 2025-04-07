import { useState, useEffect } from 'react'
export function useFetch(url: string) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({msg: ""});

    //altervativ
    //const [fetchValues, setFetchValues] =useState({data: null, loading: true, error: null})

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch(url);
                
                if(!response.ok){
                    setError({ msg: "network response failed" })
                    throw new Error("Network response failed")
                    
                }
                const json = await response.json();
                setData(json)

            } catch (err) {
                setError({msg: "failed to fetch data"})
                console.log("error", err)

            } finally {
                setLoading(false)
            }

        }

        fetchData()

    }, [url])

    return { data, loading, error }

}