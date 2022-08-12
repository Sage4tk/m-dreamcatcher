//componets
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contact:React.FC<any> = () => {
    return (
        <>
        <Nav />
        <div className="bg-[#212127] py-10 mb-8 lg:mx-8">
            <h1 className="font-serif text-white text-4xl text-center">Contact</h1>
        </div>
        <div className="flex flex-col relative font-serif items-center justify-center h-[80px] mb-14">
            <h2 className="text-2xl lg:text-3xl">Stay In Touch</h2>
            <div className="w-[60px] h-[1px] bg-black absolute bottom-0"></div>
        </div>
        <form className="flex flex-col font-serif px-2 lg:w-[600px] mx-auto mb-32">
            <input className="border-solid border-gray-400 border-[1px] p-2 focus:outline-none" type="text" placeholder="Enter your name"/>
            <input className="border-solid border-gray-400 border-[1px] p-2 focus:outline-none" type="email" placeholder="Enter your email"/>
            <input className="border-solid border-gray-400 border-[1px] p-2 focus:outline-none" type="text" placeholder="Subject" />
            <textarea className="border-solid border-gray-400 border-[1px] p-2 focus:outline-none resize-none h-[140px] mb-4" placeholder="Enter your message" />
            <input className="bg-[#212127] text-white py-3 font-sans font-bold" type="submit" value="Send Message" />
        </form>
        <Footer />
        </>
    )
}

export default Contact;