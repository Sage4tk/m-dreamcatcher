import { Instagram, Facebook, Twitter } from "react-bootstrap-icons"

const Footer:React.FC = () => {
    return (
        <>
        <div className="w-screen font-serif flex flex-col items-center border-t-[1px] md:flex-row md:justify-center py-[60px] border-gray-100">
            <p className="text-gray-400 mb-2 md:mb-[0rem] md:mr-16">Sign up to our mailing list</p>
            <form>
                <input className="border-2 border-r-0 border-gray-100 py-[8px] px-[8px] md:px-[12px] md:py-[8px] focus:border-blue-400 focus:outline-none" type="email" placeholder="Sing up now"/>
                <input className="font-sans font-bold text-white bg-black py-[10px] px-[10px] md:px-[12px] md:py-[10px]" type="submit" value="Sign Up" />
            </form>
        </div>
        <footer className="w-screen bg-[#212127] text-white px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="font-bold flex flex-col md:flex-row">
                    <a href="">Home</a>
                    <a className="my-[8px] md:my-0 md:mx-8" href="">Shop</a>
                    <a href="">Contact</a>
                </div>
                <div className="flex font-serif mt-[20px] md:mt-[0px]">
                    <p className="mr-2">Follow us on:</p>
                    <Facebook size={22} />
                    <Instagram className="mx-2" size={22} />
                    <Twitter size={22} />
                </div>
            </div>

        </footer>
        </>
    )
}

export default Footer;