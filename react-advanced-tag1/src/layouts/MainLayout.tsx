import { ReactElement, ReactNode, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout({ children }: { children: ReactNode | ReactElement | ReactElement[] }) {

    const [clicked, setClicked] = useState(false)

    function handleClick() {
        
        setClicked(!clicked)
        console.log("clicked inner", clicked)
    }

    console.log("outside clicked", clicked)
    return <>
        <Header />
        {children}
        {/* <button onClick={handleClick}>click</button> */}
        <Footer />
    </>
}