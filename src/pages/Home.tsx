//components
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import LandingCard from "../components/LandingCard";

//data
import products from "../data/products";

const Home:React.FC = () => {
    return (
        <>  
            <Nav />
            {/* landing section */}
            <div className="w-screen max-w-full h-[320px] md:h-[850px]  overflow-x-hidden flex justify-center">
                <div className="bg-landing-img bg-cover bg-center w-full lg:w-[97%] h-full flex items-center justify-center">
                    <div className="w-[97%] flex flex-col items-center">
                        <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-8">The Best Quality Dreamcatchers There is.</h1>
                        <a className="bg-[#212127] text-white md:text-xl py-[15px] px-[20px] cursor-pointer hover:opacity-95 active:opacity-100">Shop Now</a>
                    </div>
                </div>
            </div>
            {/* Types section */}
            <div className="py-[20px] px-[10px] md:px-[20px] font-serif text-white flex flex-col md:flex-row justify-between mb-10">
                <div className="bg-[#111] h-[200px] md:h-[120px] relative md:w-[32%] mx-2 cursor-pointer">
                    <span className="absolute bottom-4 right-4 text-3xl">Large</span>
                </div>
                <div className="bg-[#111] h-[200px] md:h-[120px] relative my-8 md:my-0 md:w-[32%] mx-2 cursor-pointer">
                    <span className="absolute bottom-4 right-4 text-3xl">Medium</span>
                </div>
                <div className="bg-[#111] h-[200px] md:h-[120px] relative md:w-[32%] mx-2 cursor-pointer">
                    <span className="absolute bottom-4 right-4 text-3xl">Small</span>
                </div>
            </div>
            {/* featured products */}
            <div className="lg:w-[1200px] lg:mx-auto">
                <div className="mb-10">
                    <h2 className="font-serif text-2xl md:text-3xl text-center">Featured Products</h2>
                    <div className="h-[16px] flex justify-center relative mb-16">
                        <div className="w-[60px] h-[0.5px] bg-black absolute bottom-0"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-4">
                        <LandingCard product={products[0].product} price={products[0].price} img={products[0].img} />
                        <LandingCard product={products[0].product} price={products[0].price} img={products[0].img} />
                        <LandingCard product={products[0].product} price={products[0].price} img={products[0].img} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;