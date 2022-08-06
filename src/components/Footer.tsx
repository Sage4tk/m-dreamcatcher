import { Instagram, Facebook, Twitter } from "react-bootstrap-icons"

export default function Footer() {
    return (
        <>
        <footer className="w-screen bg-[#212127] text-white px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="font-bold flex flex-col md:flex-row">
                    <a href="">Home</a>
                    <a className="my-[8px] md:my-0 md:mx-8" href="">Shop</a>
                    <a href="">Contact</a>
                </div>
                <div className="flex font-serif mt-[16px] md:mt-[0px]">
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