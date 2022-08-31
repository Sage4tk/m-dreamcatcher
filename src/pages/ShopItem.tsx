import { useParams, useNavigate, Link } from "react-router-dom";
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
            <h1 className="font-serif text-white text-[1.5rem] md:text-[2.5rem] text-center">{pageInfo ? pageInfo.product:"404 Product doesn't exist"}</h1>
        </div>
        {pageInfo ? "":<NotFound />}
        <Footer />
        </>
    )
}

//show 404 if page doesn't exist
const NotFound:React.FC = () => {
    return (
        <div className="w-screen h-[50vh] flex items-center justify-center">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl md:text-4xl font-serif mb-1">Product doesn't exist.</h2>
                <p className="mb-8 text-xl">We cannot find this item in our Product List</p>
                <Link to="/shop" className="bg-black font-bold text-xl text-white py-2 px-6">Redirect to store page</Link>
            </div>
        </div>
    )
}

export default ShopItem;