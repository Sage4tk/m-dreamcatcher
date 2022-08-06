

import { useState } from "react"
import { Cart } from "react-bootstrap-icons"

export default function Nav() {

    //open and close nav bar when viewport in phone
    const [bar, setBar] = useState<boolean>(false);

    return (
        <>
        <header className="w-screen flex justify-center pt-6">
            <div className="lg:w-3/5 w-screen mx-2">
                <div className="font-serif flex items-center justify-between">
                    <div className="flex items-center">
                        <p className="font-bold w-[180px] text-4xl lg:text-4xl mr-3 text-center">Mia's Catcher</p>
                        <p className="text-gray-400 hidden lg:block">Quality Dream Catchers</p>
                    </div>
                    <div className="flex text-gray-400 text-sm">
                        <div className="hidden lg:block">
                            <div></div>
                            <span>+971505957395</span>
                        </div>
                        <div className="hidden lg:block mx-4">
                            <div></div>
                            <span>user@miadream.com</span>
                        </div>
                        <div className="justify-self-end">
                            <Cart size={20}/>
                        </div>
                    </div>
                </div>
                <div className="relative h-[60px] bg-[#212127] flex items-center justify-center mt-[10px] lg:mt-0 cursor-pointer lg:cursor-default">
                    <div className="space-y-1 lg:hidden">
                        <div className="w-4 h-0.5 bg-gray-800"></div>
                        <div className="w-4 h-0.5 bg-gray-800"></div>
                        <div className="w-4 h-0.5 bg-gray-800"></div>
                    </div>
                    <nav className="h-100 absolute flex-col lg:flex-row hidden lg:flex text-gray-400">
                        <a href="#" className="flex items-center px-4 font-bold hover:text-black">Home</a>
                        <a href="#" className="flex items-center px-4 font-bold hover:text-black">Shop</a>
                        <a href="#" className="flex items-center px-4 font-bold hover:text-black">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}