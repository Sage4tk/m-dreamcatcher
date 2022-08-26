import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//data
import products from "../data/products";

//import components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ShopItem:React.FC = () => {
    const { id } = useParams();

    //set page info
    const [pageInfo, setPageInfo] = useState<any>(null);

    //search if its in data list
    useEffect(() => {
        //clear previous data if there is
        setPageInfo(null)

        products.map((data:any) => {
            if (data.product === id) {
                setPageInfo(data);
            }
        })
    }, [id]);

    return (
        <>
        <Nav />
        <div className="bg-[#212127] py-10 mb-8 lg:mb-16 lg:mx-8 lg:py-15">
            <h1 className="font-serif text-white text-[2.5rem] text-center">{pageInfo ? pageInfo.product:"404 Product doesn't exist"}</h1>
        </div>
        <Footer />
        </>
    )
}

export default ShopItem;