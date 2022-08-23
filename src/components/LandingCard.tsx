import { Link } from 'react-router-dom'

interface LcProps {
    product: string,
    price: number,
    img: any
}
const LandingCard:React.FC<LcProps> = ({ product, price, img}) => {
    return (
        <>
        <Link to={`/shop/${product}`}>
        <div className="flex flex-col font-serif items-center hover:opacity-90 cursor-pointer">
            <img className="aspect-square w-full object-none object-center mb-4" alt="" src={img}/>
            <p className="text-xl mb-1">{product}</p>
            <p className="text-2xl text-gray-400">AED {price}.00</p>
        </div>
        </Link>
        </>
    )
}

export default LandingCard;