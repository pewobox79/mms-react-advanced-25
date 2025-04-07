import { useState, useEffect } from "react"

//(max-width: 600px)
export default function useMediaQuery(query: string) {

    const [matches, setMatches] = useState(false);

    useEffect(() => {

        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches)

        const handler =(e)=> setMatches(e.matches);
        mediaQuery.addEventListener("change", handler)

        return ()=>{
            mediaQuery.removeEventListener("change", handler)
        }

    }, [query])


    return matches



}