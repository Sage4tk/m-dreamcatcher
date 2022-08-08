

import { useState } from "react"
import { Cart } from "react-bootstrap-icons"

const Nav:React.FC = () => {

    //open and close nav bar when viewport in phone
    const [bar, setBar] = useState<boolean>(false);

    return (
        <>
        <header className="w-screen flex justify-center pt-6 bg-white">
            <div className="lg:w-[940px] w-screen mx-2 lg:mx-0">
                <div className="font-serif flex items-center justify-between pr-[20px] lg:pr-0">
                    <div className="flex items-center">
                        <p className="font-bold w-[180px] text-4xl lg:text-4xl mr-3 text-center">Mia's Catcher</p>
                        <p className="text-gray-400 hidden lg:block">Quality Dream Catchers</p>
                    </div>
                    <div className="flex text-gray-400 text-sm">
                        <div className="hidden md:block">
                            <div></div>
                            <span className="tracking-wider">+971505957395</span>
                        </div>
                        <div className="hidden md:block mx-4">
                            <div></div>
                            <span className="tracking-wide">user@miadream.com</span>
                        </div>
                        <div>
                            <Cart size={20}/>
                        </div>
                    </div>
                </div>
                <div className={bar ? "relative h-[60px] bg-[#000] flex items-center justify-center mt-[10px] lg:mt-0 cursor-pointer lg:cursor-default lg:bg-[#fff]":"relative h-[60px] flex items-center justify-center mt-[10px] lg:mt-0 cursor-pointer lg:cursor-default lg:bg-white"}  onClick={() => {setBar(!bar)}}>
                    <div className="space-y-1 lg:hidden">
                        <div className={bar ? "w-4 h-0.5 bg-white":"w-4 h-0.5 bg-gray-800"}></div>
                        <div className={bar ? "w-4 h-0.5 bg-white":"w-4 h-0.5 bg-gray-800"}></div>
                        <div className={bar ? "w-4 h-0.5 bg-white":"w-4 h-0.5 bg-gray-800"}></div>
                    </div>
                    <nav className={bar?"bg-white h-auto lg:h-100 w-screen lg:w-auto absolute lg:flex-row lg:flex text-gray-400 p-[8px] lg:p-0 z-[0] lg:z-auto translate-y-[120px] lg:translate-y-0 transition-all":"h-auto lg:h-100 w-screen lg:w-auto absolute lg:flex-row lg:flex text-gray-400 p-[8px] lg:p-0 z-[-1] lg:z-auto translate-y-[-80px] lg:translate-y-0 transition-all bg-white"}>
                        <a href="#" className="flex items-center px-4 py-3 lg:px-4 font-bold hover:text-black">Home</a>
                        <a href="#" className="flex items-center px-4 py-3 lg:px-4 font-bold hover:text-black">Shop</a>
                        <a href="#" className="flex items-center px-4 py-3 lg:px-4 font-bold hover:text-black">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}

export default Nav;