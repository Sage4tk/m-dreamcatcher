//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"

//data
import products from "../data/products"
import LandingCard from "../components/LandingCard"

const Shop:React.FC = () => {
    return (
        <>
        <Nav />
        <div className="bg-[#212127] py-10 mb-14 lg:mb-16 lg:mx-8 lg:py-15">
            <h1 className="font-serif text-white text-[2.5rem] text-center ">Shop</h1>
        </div>
        <div className="flex flex-col md:flex-row px-6 md:w-[1000px] mx-auto">
            <div className="mb-8 md:mr-12">
                <div className="mb-10">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="font-serif text-xl">About Us</h3>
                        <span className="border-b border-gray-400 w-2/3"></span>
                    </div>
                    <p className="font-serif text-gray-400 text-[14px] mb-2">We handcraft quality dreamcatchers with the finest material around to make sure you go to sleep with ease.</p>
                    <p className="font-serif text-gray-400 text-[14px] mb-2">support@miadreams.com</p>
                    <p className="font-serif text-gray-400 text-[14px] mb-2">+971505957395</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-serif text-xl">Categories</h3>
                        <span className="border-b border-gray-400 w-2/3"></span>
                    </div>
                    <button aria-label="filter large" className="self-start text-gray-400 mb-2">Large</button>
                    <button aria-label="filter medium" className="self-start text-gray-400 mb-2">Medium</button>
                    <button aria-label="filter small" className="self-start text-gray-400 mb-2">Small</button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {products.map((data:any, index:number) => <LandingCard product={data.product} price={data.price} img={data.img} key={index} />)}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Shop;