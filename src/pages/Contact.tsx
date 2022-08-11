//componets
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contact:React.FC<any> = () => {
    return (
        <>
        <Nav />
        <div className="bg-[#212127] py-10">
            <h1 className="font-serif text-white text-4xl text-center">Contact</h1>
        </div>
        <div>
            <h2>Stay In Touch</h2>
        </div>
        <form className="flex flex-col">
            <input type="text" placeholder="Enter your name"/>
            <input type="email" placeholder="Enter your email"/>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Enter your message" />
            <input type="submit" value="Send Message" />
        </form>
        <Footer />
        </>
    )
}

export default Contact;