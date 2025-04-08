import { ComponentType, useState, useEffect } from "react";

export type LoaderData = {
    message: string[],
    status: string
}

interface WithLoaderProps {
    data: LoaderData
}

//HOC definition
export default function withLoader<P>(Element: ComponentType<P & WithLoaderProps>, url: string) {

    return function WithLoaderComponent(props: P) {
        const [data, setData] = useState<LoaderData | null>(null);

        useEffect(()=>{
            async function getData(){
                try{
                    const response = await fetch(url);
                    const imgData = await response.json();
                    setTimeout(()=>{
                        setData(imgData)
                    }, 3000)

                }catch(err){
                    console.log("error", err)
                }
            }
            getData()

        }, [])

        if(!data){
            return <h2>Images loading...</h2>
        }

        return <Element {...props} data={data}/>

    }

}