interface LcProps {
    product: string,
    price: number,
    img: any
}
const LandingCard:React.FC<LcProps> = ({ product, price, img}) => {
    return (
        <>
        <div className="flex flex-col font-serif items-center">
            <img className="aspect-square w-full object-none object-center mb-4" alt="" src={img}/>
            <p className="text-xl mb-1">{product}</p>
            <p className="text-2xl text-gray-400">AED {price}.00</p>
        </div>
        </>
    )
}

export default LandingCard;