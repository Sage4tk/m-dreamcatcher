import { useParams } from "react-router-dom";

//import components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect } from "react";

const ShopItem:React.FC = () => {

    const { id } = useParams();

    useEffect(() => {
        console.log(id)
    }, [id])

    return (
        <>
        <Nav />
        <div className="bg-[#212127] py-10 mb-8 lg:mb-16 lg:mx-8 lg:py-15">
            <h1 className="font-serif text-white text-[2.5rem] text-center">{id}</h1>
        </div>
        <Footer />
        </>
    )
}

export default ShopItem;