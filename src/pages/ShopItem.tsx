import { useParams } from "react-router-dom";

//import components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ShopItem:React.FC = () => {

    const { id } = useParams()

    return (
        <>
        <Nav />
        <h1>{ id }</h1>
        <Footer />
        </>
    )
}

export default ShopItem;