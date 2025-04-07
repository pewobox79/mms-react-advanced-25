import { useFetch } from "../../hooks/useFetch"
import useMediaQuery from "../../hooks/useMediaQuery";

export default function UserOverview (){

    const isMobile = useMediaQuery("(max-width: 600px)");

    console.log("ismobile", isMobile);   

    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users/");

    return<section>
        <h2>user overview</h2>

        {loading && <p>Loading data...</p>}
        {data && JSON.stringify(data)}
        {error && <p>{error.msg}</p>}


    </section>
}